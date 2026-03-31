import { pgTable, text, uuid, timestamp } from "drizzle-orm/pg-core";

export const testLeads = pgTable("test_leads", {
  id: uuid("id").defaultRandom().primaryKey(),

  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),

  status: text("status").default("registered"),
  source: text("source").default("10_min_test"),

  createdAt: timestamp("created_at").defaultNow(),
});


export const testSessions = pgTable("test_sessions", {
  id: uuid("id").defaultRandom().primaryKey(),

  leadId: uuid("lead_id").notNull(),

  testType: text("test_type").notNull().default("10_min_test"),

  status: text("status").notNull().default("started"),

  startedAt: timestamp("started_at").defaultNow().notNull(),

  completedAt: timestamp("completed_at"),
});