use crate::db::DbConn;
use crate::db::prelude::*;

mod models;
use chrono::Utc;
use uuid::Uuid;

use self::models::ApiResponse;
use self::models::Token;
use rocket::http::Cookie;
use rocket::http::CookieJar;
use rocket::http::Status;
use rocket::response::Redirect;
use rocket_oauth2::OAuth2;

pub struct HCA;

// TODO: you safe should make a crate for hackclub auth

#[get("/login/slack")]
pub fn slack_login(oauth2: OAuth2<HCA>, cookies: &CookieJar<'_>) -> Redirect {
    oauth2
        .get_redirect(
            cookies,
            &[
                "openid",
                "profile",
                "email",
                "name",
                "slack_id",
                "verification_status",
            ],
        )
        .unwrap()
}

pub async fn get_token(code: String) -> Result<String, Status> {
    let client = reqwest::Client::new();
    // TODO: use dotenv to get client id and secret
    let res = client
        .post("https://auth.hackclub.com/oauth/token")
        .form(&[
            ("client_id", "eb3507bb1893f98b5d9d2d11a0114da5"),
            (
                "client_secret",
                "ae1a8de86ada5203787a66fdb548fd4005b5f5afdd8b79c3fe22aeb4d67e3707",
            ),
            ("code", &code),
            ("redirect_uri", "http://localhost:8080/oauth/callback"),
            ("grant_type", "authorization_code"),
        ])
        .send()
        .await
        .map_err(|_| rocket::http::Status::InternalServerError)
        .unwrap();
    let token = res.json::<Token>().await;
    match token {
        Ok(v) => Ok(v.access_token),
        Err(_) => Err(rocket::http::Status::Unauthorized),
    }
}

#[get("/oauth/callback?<query..>")]
pub async fn callback(
    query: String,
    cookies: &CookieJar<'_>,
    db: DbConn,
) -> Result<Redirect, Status> {
    let token = match get_token(query).await {
        Ok(t) => t,
        Err(e) => {
            if cfg!(debug_assertions) {
                eprintln!("oauth: get_token failed: {:#?}", e);
            }
            return Err(Status::InternalServerError);
        }
    };

    cookies.add_private(
        Cookie::build(("token", token.clone()))
            .secure(cfg!(not(debug_assertions)))
            .http_only(true)
            .path("/"),
    );

    let client = reqwest::Client::new();
    let api_resp: ApiResponse = client
        .get("https://auth.hackclub.com/api/v1/me")
        .bearer_auth(&token)
        .send()
        .await
        .map_err(|e| {
            if cfg!(debug_assertions) {
                eprintln!("oauth: failed to send request to Hack Club API: {:#?}", e);
            }
            Status::InternalServerError
        })?
        .json()
        .await
        .map_err(|e| {
            if cfg!(debug_assertions) {
                eprintln!("oauth: failed to parse API response: {:#?}", e);
            }
            Status::InternalServerError
        })?;

    let identity = api_resp.identity;

    if !identity.ysws_eligible {
        if cfg!(debug_assertions) {
            eprintln!("oauth: user not YSWS eligible: {}", identity.primary_email);
        }
        return Ok(Redirect::to(uri!("/?error=ineligible")));
    }

    match identity.verification_status.as_deref().unwrap_or("NONE") {
        "verified" => { /* ok */ }
        "needs_submission" => return Ok(Redirect::to(uri!("/?error=needssubmission"))),
        "pending" => return Ok(Redirect::to(uri!("/?error=pendingverification"))),
        "ineligible" => return Ok(Redirect::to(uri!("/?error=ineligible"))),
        other => {
            if cfg!(debug_assertions) {
                eprintln!("oauth: unexpected verification status: {}", other);
            }
            return Ok(Redirect::to(uri!("/?error=unknownverification")));
        }
    };

    let primary_email = identity.primary_email;
    let first_name = identity.first_name;
    let last_name = identity.last_name;

    let user_id = Uuid::new_v4();

    let email_for_db = primary_email.clone();
    let user_exists = match db
        .run(move |conn| {
            users
                .filter(email.eq(&email_for_db))
                .select(id)
                .first::<uuid::Uuid>(conn)
                .optional()
        })
        .await
    {
        Ok(opt) => opt.is_some(),
        Err(e) => {
            if cfg!(debug_assertions) {
                eprintln!("db: failed to query user existence: {:#?}", e);
            }
            return Err(Status::InternalServerError);
        }
    };

    if !user_exists {
        let new_username = first_name.clone().unwrap_or_else(|| {
            primary_email
                .split('@')
                .next()
                .unwrap_or("user")
                .to_string()
        });

        let new_name = match (first_name.clone(), last_name.clone()) {
            (Some(f), Some(l)) => Some(format!("{} {}", f, l)),
            (Some(f), None) => Some(f),
            _ => None,
        };

        let new_user = NewUser {
            id: user_id,
            username: new_username,
            email: primary_email.clone(),
            name: new_name,
            tickets: Some(6769),
            avatar_url: None,
            created_at: Utc::now(),
        };

        if let Err(e) = db
            .run(move |conn| diesel::insert_into(users).values(new_user).execute(conn))
            .await
        {
            if cfg!(debug_assertions) {
                eprintln!("db: failed to insert new user: {:#?}", e);
            }
            return Err(Status::InternalServerError);
        }
    }

    let username_cookie = first_name.unwrap_or_else(|| {
        primary_email
            .split('@')
            .next()
            .unwrap_or("user")
            .to_string()
    });

    cookies.add(
        Cookie::build(("username", username_cookie))
            .path("/")
            .secure(cfg!(not(debug_assertions))),
    );

    cookies.add_private(
        Cookie::build(("auth", user_id.to_string()))
            .http_only(true)
            .path("/")
            .secure(cfg!(not(debug_assertions))),
    );

    Ok(Redirect::to(uri!("/hub")))
}
