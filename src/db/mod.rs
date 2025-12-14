use dotenvy::dotenv;
use std::env;

pub mod insert;
pub mod models;
pub mod prelude;
pub mod schema;

pub use prelude::*;
use rocket_sync_db_pools::{database, diesel};

#[database("postgres")]
pub struct DbConn(diesel::PgConnection);

pub fn establish_connection() -> PgConnection {
    dotenv().ok();

    let database_url = env::var("DATABASE_URL").expect("DATABASE_URL must be set");
    PgConnection::establish(&database_url)
        .unwrap_or_else(|_| panic!("Error connecting to {}", database_url))
}
