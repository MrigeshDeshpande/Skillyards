import { testLeads } from "@repo/db";
export async function findLeadByEmail(db, email) {
    console.log('Finding lead by email:', email);
  return db.query.testLeads.findFirst({
    where: (t, { eq }) => eq(t.email, email),
  });
}

export async function createLead(db, data) {
  const [lead] = await db.insert(testLeads).values(data).returning();
  return lead;
}