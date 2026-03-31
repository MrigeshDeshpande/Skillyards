import { NextResponse } from "next/server";
import { db } from "@repo/db";
import { startTest } from "@/modules/test/test.service";
import { corsHeaders } from "@/utils/cors";

export async function OPTIONS(request) {
  return new Response(null, {
    status: 204,
    headers: corsHeaders(request),
  });
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { leadId, topics } = body;

    if (!leadId || !Array.isArray(topics)) {
      return NextResponse.json(
        { error: "Invalid payload" },
        { status: 400, headers: corsHeaders(req) }
      );
    }

    const result = await startTest({ db, leadId, topics });

    return NextResponse.json(
      {
        success: true,
        sessionId: result.sessionId,
        questions: result.questions,
      },
      { headers: corsHeaders(req) }
    );

  } catch (err) {
    console.error("START TEST ERROR:", err);

    return NextResponse.json(
      { error: err.message || "Failed to start test" },
      { status: 500, headers: corsHeaders(req) }
    );
  }
}