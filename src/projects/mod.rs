use crate::prelude::*;

// TODO: hub logic here

#[get("/projects")]
pub fn projects(cookies: &CookieJar<'_>) -> Template {
    let username = cookies
        .get("username")
        .map(|c| c.value())
        .unwrap_or("Error happened");
    Template::render("projects", context! { username })
}
