CREATE TABLE IF NOT EXISTS "users_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"phone" varchar(10) NOT NULL,
	"email" text NOT NULL,
	"created_on" timestamp DEFAULT now() NOT NULL
);
