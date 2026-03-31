import { pgTable, text, jsonb, boolean, timestamp } from "drizzle-orm/pg-core";

export const testQuestions = pgTable("test_questions", {
    id: text("id").primaryKey(),

    topic: text("topic").notNull(),
    question: text("question").notNull(),

    options: jsonb("options").notNull(),
    correctAnswer: text("correct_answer").notNull(),

    isActive: boolean("is_active").default(true),

    createdAt: timestamp("created_at").defaultNow(),
});