import { NextResponse } from "next/server";
import { db } from "@repo/db";
import { getSessionById } from "@/modules/test/test.repository";
import { corsHeaders } from "@/utils/cors";

export async function OPTIONS(request) {
  return new Response(null, {
    status: 204,
    headers: corsHeaders(request),
  });
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const sessionId = searchParams.get("sessionId");

  if (!sessionId) {
    return NextResponse.json(
      { error: "Missing sessionId" },
      { status: 400, headers: corsHeaders(req) }
    );
  }

  try {
    const session = await getSessionById(db, sessionId);

    if (!session || session.status !== "completed") {
      return NextResponse.json(
        { error: "Test not finalized or missing" },
        { status: 404, headers: corsHeaders(req) }
      );
    }

    return NextResponse.json(
      {
        success: true,
        score: session.score,
        total: session.questionsSnapshot?.length || 0,
        evaluationSnapshot: session.evaluationSnapshot || [],
      },
      { headers: corsHeaders(req) }
    );
  } catch (err) {
    console.error("RESULT GET ERROR:", err);

    return NextResponse.json(
      { error: "Failed to fetch test results" },
      { status: 500, headers: corsHeaders(req) }
    );
  }
}
