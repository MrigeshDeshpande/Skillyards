import { NextResponse } from "next/server";

const allowedOrigins = [
  "https://skillyards.in",
  "https://www.skillyards.in",
  "https://skillyards-website.vercel.app",
  "http://localhost:3001",
  "http://localhost:3000",
];

export function middleware(request) {
  const origin = request.headers.get("origin") || "";
  const isAllowed = allowedOrigins.includes(origin);
  const corsOrigin = isAllowed ? origin : "https://skillyards.in";

  // Handle preflight OPTIONS requests at the edge
  if (request.method === "OPTIONS") {
    return new NextResponse(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": corsOrigin,
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Max-Age": "86400",
        "Vary": "Origin",
      },
    });
  }

  // For all other requests, add CORS headers to the response
  const response = NextResponse.next();
  response.headers.set("Access-Control-Allow-Origin", corsOrigin);
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  response.headers.set("Vary", "Origin");

  return response;
}

// Only apply to API routes
export const config = {
  matcher: "/api/:path*",
};
