CREATE TABLE "enquiries" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"first_name" text NOT NULL,
	"last_name" text NOT NULL,
	"email" text NOT NULL,
	"phone" text NOT NULL,
	"message" text,
	"status" text DEFAULT 'new',
	"created_at" timestamp DEFAULT now() NOT NULL
);
