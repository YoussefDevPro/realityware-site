use crate::db::schema::projects;
use crate::db::schema::shop_items;
use crate::db::schema::shop_order_items;
use crate::db::schema::shop_orders;
use crate::db::schema::users;
use chrono::{DateTime, Utc};
use diesel::prelude::*;
use uuid::Uuid;

#[derive(Debug, Clone, Queryable, Identifiable, Selectable)]
#[diesel(table_name = users)]
pub struct User {
    pub id: Uuid,
    pub username: String,
    pub email: String,
    pub name: Option<String>,
    pub tickets: i32,
    pub avatar_url: Option<String>,
    pub created_at: DateTime<Utc>,
}

#[derive(Debug, Clone, Queryable, Identifiable, Associations)]
#[diesel(table_name = projects)]
#[diesel(belongs_to(User, foreign_key = owner_id))]
pub struct Project {
    pub id: Uuid,
    pub title: String,
    pub slug: Option<String>,
    pub owner_id: Uuid,
    pub contributor_ids: Vec<Uuid>,
    pub short_description: Option<String>,
    pub created_at: DateTime<Utc>,
}

#[derive(Debug, Clone, Queryable, Identifiable)]
#[diesel(table_name = shop_items)]
pub struct ShopItem {
    pub id: Uuid,
    pub title: String,
    pub price_cents: i32,
    pub currency: String,
    pub stock: Option<i32>,
    pub created_at: DateTime<Utc>,
}

#[derive(Debug, Clone, Queryable, Identifiable, Associations)]
#[diesel(table_name = shop_orders)]
#[diesel(belongs_to(User, foreign_key = buyer_id))]
pub struct ShopOrder {
    pub id: Uuid,
    pub buyer_id: Uuid,
    pub total_cents: i32,
    pub currency: String,
    pub status: String,
    pub created_at: DateTime<Utc>,
}

#[derive(Debug, Clone, Queryable, Identifiable, Associations)]
#[diesel(table_name = shop_order_items)]
#[diesel(belongs_to(ShopOrder, foreign_key = order_id))]
#[diesel(belongs_to(ShopItem, foreign_key = shop_item_id))]
pub struct ShopOrderItem {
    pub id: Uuid,
    pub order_id: Uuid,
    pub shop_item_id: Uuid,
    pub quantity: i32,
    pub unit_price_cents: i32,
}
// TODO: add insertable models
