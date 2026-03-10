import { NextResponse } from "next/server";

export function success(data = null, message = null, status = 200) {
  return NextResponse.json(
    {
      success: true,
      data,
      message
    },
    { status }
  );
}

export function error(message = "Something went wrong", data = null, status = 500) {
  return NextResponse.json(
    {
      success: false,
      message,
      data
    },
    { status }
  );
}