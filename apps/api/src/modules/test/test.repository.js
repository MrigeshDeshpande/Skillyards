import { testLeads, testSessions } from "@repo/db"; 

export async function findLeadByEmail(db, email) {
  console.log("Finding lead by email:", email);

  return db.query.testLeads.findFirst({
    where: (t, { eq }) => eq(t.email, email),
  });
}

export async function createLead(db, data) {
  const [lead] = await db.insert(testLeads).values(data).returning();
  return lead;
}

export async function createTestSession(db, data) {
  const [session] = await db
    .insert(testSessions)
    .values({
      leadId: data.leadId,
      testType: data.testType || "10_min_test",
      status: data.status || "started",
      questionsSnapshot: data.questionsSnapshot || [],
      startedAt: new Date(),
    })
    .returning();

  return session;
}

export async function getSessionById(db, sessionId) {
  return db.query.testSessions.findFirst({
    where: (t, { eq }) => eq(t.id, sessionId),
  });
}