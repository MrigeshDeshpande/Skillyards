import { NextResponse } from "next/server";
import { getTestQuestions } from "@/modules/test/test.service";

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders(),
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
      { headers: corsHeaders() }
    );
  } catch (err) {
    console.error("QUESTIONS API ERROR:", err);

    return NextResponse.json(
      { error: "Failed to fetch questions" },
      { status: 500, headers: corsHeaders() }
    );
  }
}