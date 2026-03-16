import { NextResponse } from "next/server";
import { sendTestEmail } from "@/modules/notifications/email.service";

export async function GET() {
  try {

    const result = await sendTestEmail();

    return NextResponse.json({
      success: true,
      data: result
    });

  } catch (err) {

    return NextResponse.json({
      success: false,
      message: err.message
    });

  }
}