import { db, users } from "@skillyards/db";

export async function GET() {
  const result = await db.select().from(users);

  return Response.json({
    status: "ok",
    users: result
  });
}