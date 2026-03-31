import {
  findLeadByEmail,
  createLead,
} from "./test.repository";

import { getSessionById, createTestSession } from "./test.repository";
import { testSessions } from "@repo/db";
import { eq } from "drizzle-orm";

// ⚠️ TEMP: remove later when start API is fully used
import { TEST_QUESTIONS } from "./questions";

// ---------------- REGISTER ----------------

export async function registerTestLead({ db, data }) {
  const existing = await findLeadByEmail(db, data.email);

  let lead;
  let alreadyExists = false;

  if (existing) {
    lead = existing;
    alreadyExists = true;
  } else {
    lead = await createLead(db, {
      ...data,
      source: "10_min_test",
      status: "registered",
    });
  }

  return {
    alreadyExists,
    lead,
  };
}

// ---------------- TEMP QUESTIONS (legacy) ----------------

export function getTestQuestions({ topics = [] } = {}) {
  let filteredQuestions = TEST_QUESTIONS;

  if (topics.length > 0) {
    filteredQuestions = TEST_QUESTIONS.filter((q) =>
      topics.includes(q.topic)
    );
  }

  const shuffled = [...filteredQuestions].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 30);

  return selected.map(({ correctAnswer, ...q }) => q);
}

// ---------------- START TEST ----------------

export async function startTest({ db, leadId, topics }) {
  const questions = getTestQuestions({ topics });

  // Capture exactly the full questions object including the correct answers 
  // into the user's snapshot, so submit Test can check it later.
  const session = await createTestSession(db, {
    leadId,
    testType: "10_min_test",
    status: "started",
    questionsSnapshot: questions,
  });

  return {
    sessionId: session.id,
    questions,
  };
}

// ---------------- SUBMIT TEST (NEW CORE) ----------------

export async function submitTest({ db, sessionId, answers }) {
  if (!sessionId || !Array.isArray(answers)) {
    throw new Error("Invalid payload");
  }

  const session = await getSessionById(db, sessionId);

  if (!session) {
    throw new Error("Session not found");
  }

  // 🚨 Prevent resubmission
  if (session.status === "completed") {
    throw new Error("Test already submitted");
  }

  const questions = session.questionsSnapshot;

  let score = 0;
  const wrongAnswers = [];

  for (const userAns of answers) {
    const actualQ = questions.find(q => q.id === userAns.questionId);
    if (!actualQ) continue;

    const correctAnswer = actualQ.correctAnswer;
    const givenAnswer = userAns.selectedOptionId;

    if (correctAnswer === givenAnswer) {
      score++;
    } else {
      wrongAnswers.push({
        question: actualQ.question,
        topic: actualQ.topic,
        yourAnswer: givenAnswer || "Not answered",
        correctAnswer,
      });
    }
  }

  // ✅ update session
  await db
    .update(testSessions)
    .set({
      status: "completed",
      completedAt: new Date(),
      score,
    })
    .where(eq(testSessions.id, sessionId));

  return {
    score,
    total: questions.length,
    wrongAnswers,
  };
}