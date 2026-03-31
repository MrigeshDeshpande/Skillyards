import { findLeadByEmail, createLead } from "./test.repository";

export async function registerTestLead({ db, data }) {
  const existing = await findLeadByEmail(db, data.email);

  if (existing) {
    return {
      alreadyExists: true,
      lead: existing,
    };
  }

  const lead = await createLead(db, {
    ...data,
    source: "10_min_test",
    status: "registered",
  });

  return {
    alreadyExists: false,
    lead,
  };
}