import { NextResponse } from "next/server";
import { db } from "@repo/db";
import { registerTestSchema } from "@/modules/test/test.schema";
import { registerTestLead } from "@/modules/test/test.service";

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

    const parsed = registerTestSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input" },
        { status: 400, headers: corsHeaders() }
      );
    }

    const result = await registerTestLead({
      db,
      data: parsed.data,
    });

    return NextResponse.json(
      {
        success: true,
        leadId: result.lead.id,
        alreadyExists: result.alreadyExists,
      },
      { headers: corsHeaders() }
    );

  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { error: "Server error" },
      { status: 500, headers: corsHeaders() }
    );
  }
}