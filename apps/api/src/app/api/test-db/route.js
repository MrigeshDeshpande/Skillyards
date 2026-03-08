import { sql } from "@skillyards/db";

export async function GET() {
  try {
    const result = await sql`SELECT NOW()`;

    return Response.json({
      status: "ok",
      db: "connected",
      time: result
    });
  } catch (error) {
    return Response.json({
      status: "error",
      db: "failed",
      message: error.message
    });
  }
}