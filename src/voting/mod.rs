use crate::prelude::*;

// TODO: hub logic here

#[get("/voting")]
pub fn voting(cookies: &CookieJar<'_>) -> Template {
    let username = cookies
        .get("username")
        .map(|c| c.value())
        .unwrap_or("Error happened");
    Template::render("voting", context! { username })
}
