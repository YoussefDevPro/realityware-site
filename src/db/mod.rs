pub mod insert;
pub mod models;
pub mod prelude;
pub mod schema;

use rocket_sync_db_pools::{database, diesel};

#[database("postgres")]
pub struct DbConn(diesel::PgConnection);
