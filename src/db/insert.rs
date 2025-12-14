use crate::db::schema::{projects, shop_items, shop_order_items, shop_orders, users};
use chrono::DateTime;
use chrono::Utc;
use diesel::prelude::*;
use uuid::Uuid;

#[derive(Insertable)]
#[diesel(table_name = users)]
pub struct NewUser {
    pub id: Uuid,
    pub username: String,
    pub email: String,
    pub name: Option<String>,
    pub tickets: Option<i32>,
    pub avatar_url: Option<String>,
    pub created_at: DateTime<Utc>,
}

#[derive(Debug, Insertable)]
#[diesel(table_name = projects)]
pub struct NewProject<'a> {
    pub title: &'a str,
    pub slug: Option<&'a str>,
    pub owner_id: Uuid,
    pub contributor_ids: Vec<Uuid>,
    pub short_description: Option<&'a str>,
}

#[derive(Debug, Insertable)]
#[diesel(table_name = shop_items)]
pub struct NewShopItem<'a> {
    pub title: &'a str,
    pub price_cents: i32,
    pub currency: &'a str,
    pub stock: Option<i32>,
}

#[derive(Debug, Insertable)]
#[diesel(table_name = shop_orders)]
pub struct NewShopOrder<'a> {
    pub buyer_id: Uuid,
    pub total_cents: i32,
    pub currency: &'a str,
    pub status: &'a str,
}

#[derive(Debug, Insertable)]
#[diesel(table_name = shop_order_items)]
pub struct NewShopOrderItem {
    pub order_id: Uuid,
    pub shop_item_id: Uuid,
    pub quantity: i32,
    pub unit_price_cents: i32,
}
