#[macro_use]
extern crate rocket;
use crate::auth::HCA;
use crate::auth::{callback, slack_login};
use rocket::fs::FileServer;
use rocket_oauth2::OAuth2;

mod auth;
mod db;
mod gallery;
mod hub;
mod prelude;
mod projects;
mod shop;
mod voting;

use crate::prelude::*;

#[get("/")]
fn index() -> Template {
    Template::render("index", context! {})
}

#[launch]
fn rocket() -> _ {
    rocket::build()
        .attach(Template::fairing())
        .attach(OAuth2::<HCA>::fairing("hca"))
        .attach(db::DbConn::fairing())
        // we should use a cleaner way to do this
        .mount(
            "/",
            routes![
                index,
                hub::hub,
                slack_login,
                callback,
                projects::projects,
                gallery::gallery,
                shop::shop,
                voting::voting
            ],
        )
        .mount("/static", FileServer::from("static"))
}
