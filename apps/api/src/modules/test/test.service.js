import {
  findLeadByEmail,
  createLead,
} from "./test.repository";

import { getSessionById, createTestSession, getLatestSessionByLeadId, getRandomActiveQuestions } from "./test.repository";
import { testSessions } from "@repo/db";
import { eq } from "drizzle-orm";



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



// ---------------- START TEST ----------------

export async function startTest({ db, leadId, topics }) {
  const existingSession = await getLatestSessionByLeadId(db, leadId);

  if (existingSession) {
    if (existingSession.status === "completed") {
      return { alreadyCompleted: true, sessionId: existingSession.id };
    }

    const elapsedMinutes = (new Date() - new Date(existingSession.startedAt)) / 60000;
    if (elapsedMinutes > 10.5) {
      // Auto-finalize the abandoned/expired session
      await db
        .update(testSessions)
        .set({ status: "completed", completedAt: new Date() })
        .where(eq(testSessions.id, existingSession.id));

      return { alreadyCompleted: true, sessionId: existingSession.id };
    }

    // Resume Session
    const questionsForFrontend = existingSession.questionsSnapshot.map(({ correctAnswer, ...q }) => q);
    
    return {
      sessionId: existingSession.id,
      questions: questionsForFrontend,
      startedAt: existingSession.startedAt,
    };
  }

  const rawQuestions = await getRandomActiveQuestions(db, topics);

  if (!rawQuestions || rawQuestions.length === 0) {
    throw new Error("No questions available for the selected topics in the database.");
  }

  const session = await createTestSession(db, {
    leadId,
    testType: "10_min_test",
    status: "started",
    questionsSnapshot: rawQuestions, // DB saves full payload including correctAnswer!
  });

  const questionsForFrontend = rawQuestions.map(({ correctAnswer, ...q }) => q);

  return {
    sessionId: session.id,
    questions: questionsForFrontend,
    startedAt: session.startedAt,
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

  // 🚨 Strict Time Bounds Enforcement (11m bound to absorb network latency on 10 min test)
  const elapsedMinutes = (new Date() - new Date(session.startedAt)) / 60000;
  if (elapsedMinutes > 11) {
    throw new Error("Test submission expired. Time limit exceeded.");
  }

  const questions = session.questionsSnapshot;

  let score = 0;
  const evaluationSnapshot = [];

  for (const userAns of answers) {
    const actualQ = questions.find(q => q.id === userAns.questionId);
    if (!actualQ) continue;

    const correctAnswer = actualQ.correctAnswer;
    const givenAnswer = userAns.selectedOptionId;

    if (correctAnswer === givenAnswer) {
      score++;
    } else {
      evaluationSnapshot.push({
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
      evaluationSnapshot,
    })
    .where(eq(testSessions.id, sessionId));

  return {
    score,
    total: questions.length,
  };
}