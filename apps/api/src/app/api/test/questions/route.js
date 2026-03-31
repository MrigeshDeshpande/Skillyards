import { NextResponse } from "next/server";
import { getTestQuestions } from "@/modules/test/test.service";
import { corsHeaders } from "@/utils/cors";

export async function OPTIONS(request) {
  return new Response(null, {
    status: 204,
    headers: corsHeaders(request),
  });
}

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const topicsParam = searchParams.get("topics");
    const topics = topicsParam ? topicsParam.split(",") : [];

    const questions = getTestQuestions({ topics });

    return NextResponse.json(
      { success: true, questions },
      { headers: corsHeaders(req) }
    );
  } catch (err) {
    console.error("QUESTIONS API ERROR:", err);

    return NextResponse.json(
      { error: "Failed to fetch questions" },
      { status: 500, headers: corsHeaders(req) }
    );
  }
}