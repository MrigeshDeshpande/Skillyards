import { 
  findLeadByEmail, 
  createLead, 
  createTestSession 
} from "./test.repository";

import { TEST_QUESTIONS } from "./questions"; 

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

  const session = await createTestSession(db, {
    leadId: lead.id,
    testType: "10_min_test",
    status: "started",
  });

  console.log("SESSION CREATED:", session.id);

  return {
    alreadyExists,
    lead,
    sessionId: session.id,
  };
}

export function getTestQuestions({ topics = [] } = {}) {
  let filteredQuestions = TEST_QUESTIONS;

  if (topics.length > 0) {
    filteredQuestions = TEST_QUESTIONS.filter(q => topics.includes(q.topic));
  }

  // Shuffle questions randomly
  const shuffled = [...filteredQuestions].sort(() => 0.5 - Math.random());
  
  // Select top 30 questions
  const selected = shuffled.slice(0, 30);

  return selected.map(({ correctAnswer, ...q }) => q);
}