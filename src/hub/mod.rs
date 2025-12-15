use crate::db::DbConn;
use crate::db::schema::users::dsl::*;
use crate::prelude::*;
use diesel::prelude::*;
use rocket::http::Status;
use uuid::Uuid;

#[get("/hub")]
pub async fn hub(cookies: &CookieJar<'_>, conn: DbConn) -> Result<Template, Status> {
    // Get user id from signed cookie first
    println!("HUB START");
    dbg!(&cookies);
    dbg!(&cookies.get_private("auth"));
    let user_id: Uuid = cookies
        .get_private("auth")
        .and_then(|c| Uuid::parse_str(c.value()).ok())
        .ok_or(Status::Unauthorized)?;
    dbg!(user_id);

    // Run DB query inside async `.run()`
    conn.run(move |c| {
        // `c` is &mut PgConnection here
        let result = users
            .filter(id.eq(user_id))
            .select((username, tickets))
            .first::<(String, i32)>(c); // explicitly specify type
        dbg!(&result);

        match result {
            Ok((username_val, tickets_val)) => Ok(Template::render(
                "hub",
                context! {
                    username: username_val,
                    tickets: tickets_val,
                },
            )),
            Err(_) => Err(Status::Unauthorized),
        }
    })
    .await
}
