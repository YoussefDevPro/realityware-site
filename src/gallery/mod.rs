use crate::prelude::*;

#[get("/gallery")]
pub fn gallery(cookies: &CookieJar<'_>) -> Template {
    let username = cookies
        .get("username")
        .map(|c| c.value())
        .unwrap_or("Error happened");
    Template::render("gallery", context! { username })
}
