import { NextResponse } from "next/server";
import { db } from "@repo/db";
import { testSessions } from "@repo/db";
import { eq } from "drizzle-orm";
import { TEST_QUESTIONS } from "@/modules/test/questions";

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders(),
  });
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { leadId, answers } = body;

    if (!leadId || !Array.isArray(answers)) {
      return NextResponse.json(
        { error: "Invalid payload format." },
        { status: 400, headers: corsHeaders() }
      );
    }

    // 1. Calculate Score and track wrong answers
    let score = 0;
    const total = answers.length;
    const wrongAnswers = [];

    for (const userAns of answers) {
      const actualQ = TEST_QUESTIONS.find(q => q.id === userAns.questionId);
      const givenAnswer = userAns.selectedOptionId || userAns.selectedOption; 
      
      if (actualQ && actualQ.correctAnswer === givenAnswer) {
        score += 1;
      } else if (actualQ) {
        wrongAnswers.push({
          question: actualQ.question,
          topic: actualQ.topic,
          yourAnswer: givenAnswer || "Not answered",
          correctAnswer: actualQ.correctAnswer,
        });
      }
    }

    // 2. Update Database Session strictly to 'completed'
    await db
      .update(testSessions)
      .set({
        status: "completed",
        completedAt: new Date(),
      })
      .where(eq(testSessions.leadId, leadId));

    // 3. Respond with results + wrong answers
    return NextResponse.json(
      {
        success: true,
        score,
        total,
        wrongAnswers,
      },
      { headers: corsHeaders() }
    );

  } catch (err) {
    console.error("❌ SUBMIT TEST ERROR:", err);
    return NextResponse.json(
      { error: "Server error during submission." },
      { status: 500, headers: corsHeaders() }
    );
  }
}
