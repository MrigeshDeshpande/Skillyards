import { NextResponse } from "next/server";
import { success, error } from "@/utils/response";

export async function GET() {
  try {

    const payload = success(
      {
        status: "ok",
        service: "skillyards-api",
        version: "1.0.0",
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
      },
      "API is healthy"
    );

    return NextResponse.json(payload, { status: 200 });

  } catch (err) {

    const payload = error("Health check failed", {
      error: err.message
    });

    return NextResponse.json(payload, { status: 500 });

  }
}