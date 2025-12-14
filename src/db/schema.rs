// @generated automatically by Diesel CLI.

diesel::table! {
    projects (id) {
        id -> Uuid,
        title -> Text,
        slug -> Nullable<Text>,
        owner_id -> Uuid,
        contributor_ids -> Array<Nullable<Uuid>>,
        short_description -> Nullable<Text>,
        created_at -> Timestamptz,
    }
}

diesel::table! {
    shop_items (id) {
        id -> Uuid,
        title -> Text,
        price_cents -> Int4,
        currency -> Text,
        stock -> Nullable<Int4>,
        created_at -> Timestamptz,
    }
}

diesel::table! {
    shop_order_items (id) {
        id -> Uuid,
        order_id -> Uuid,
        shop_item_id -> Uuid,
        quantity -> Int4,
        unit_price_cents -> Int4,
    }
}

diesel::table! {
    shop_orders (id) {
        id -> Uuid,
        buyer_id -> Uuid,
        total_cents -> Int4,
        currency -> Text,
        status -> Text,
        created_at -> Timestamptz,
    }
}

diesel::table! {
    users (id) {
        id -> Uuid,
        username -> Text,
        email -> Text,
        name -> Nullable<Text>,
        tickets -> Int4,
        avatar_url -> Nullable<Text>,
        created_at -> Timestamptz,
    }
}

diesel::joinable!(projects -> users (owner_id));
diesel::joinable!(shop_order_items -> shop_items (shop_item_id));
diesel::joinable!(shop_order_items -> shop_orders (order_id));
diesel::joinable!(shop_orders -> users (buyer_id));

diesel::allow_tables_to_appear_in_same_query!(
    projects,
    shop_items,
    shop_order_items,
    shop_orders,
    users,
);
