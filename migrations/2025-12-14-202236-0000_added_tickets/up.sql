-- Your SQL goes here
CREATE TABLE "users"(
	"id" UUID NOT NULL PRIMARY KEY,
	"username" TEXT NOT NULL,
	"email" TEXT NOT NULL,
	"name" TEXT,
	"tickets" INTEGER NOT NULL,
	"avatar_url" TEXT,
	"created_at" TIMESTAMPTZ NOT NULL
);

CREATE TABLE "shop_items"(
	"id" UUID NOT NULL PRIMARY KEY,
	"title" TEXT NOT NULL,
	"price_cents" INTEGER NOT NULL,
	"currency" TEXT NOT NULL,
	"stock" INTEGER,
	"created_at" TIMESTAMPTZ NOT NULL
);

CREATE TABLE "projects"(
	"id" UUID NOT NULL PRIMARY KEY,
	"title" TEXT NOT NULL,
	"slug" TEXT,
	"owner_id" UUID NOT NULL,
	"contributor_ids" UUID[] NOT NULL,
	"short_description" TEXT,
	"created_at" TIMESTAMPTZ NOT NULL,
	FOREIGN KEY ("owner_id") REFERENCES "users"("id")
);

CREATE TABLE "shop_orders"(
	"id" UUID NOT NULL PRIMARY KEY,
	"buyer_id" UUID NOT NULL,
	"total_cents" INTEGER NOT NULL,
	"currency" TEXT NOT NULL,
	"status" TEXT NOT NULL,
	"created_at" TIMESTAMPTZ NOT NULL,
	FOREIGN KEY ("buyer_id") REFERENCES "users"("id")
);

CREATE TABLE "shop_order_items"(
	"id" UUID NOT NULL PRIMARY KEY,
	"order_id" UUID NOT NULL,
	"shop_item_id" UUID NOT NULL,
	"quantity" INTEGER NOT NULL,
	"unit_price_cents" INTEGER NOT NULL,
	FOREIGN KEY ("order_id") REFERENCES "shop_orders"("id"),
	FOREIGN KEY ("shop_item_id") REFERENCES "shop_items"("id")
);




