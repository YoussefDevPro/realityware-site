use crate::prelude::*;

// TODO: hub logic here

#[get("/shop")]
pub fn shop(cookies: &CookieJar<'_>) -> Template {
    let username = cookies
        .get("username")
        .map(|c| c.value())
        .unwrap_or("Error happened");
    Template::render("shop", context! { username })
}
