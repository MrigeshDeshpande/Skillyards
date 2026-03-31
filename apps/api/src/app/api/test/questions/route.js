import { NextResponse } from "next/server";
import { getTestQuestions } from "@/modules/test/test.service";

export async function GET() {
  try {
    const questions = getTestQuestions();

    return NextResponse.json({
      success: true,
      questions,
    });
  } catch (err) {
    console.error("QUESTIONS API ERROR:", err);

    return NextResponse.json(
      { error: "Failed to fetch questions" },
      { status: 500 }
    );
  }
}