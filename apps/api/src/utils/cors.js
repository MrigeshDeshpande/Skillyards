export function corsHeaders(request) {
  const origin = request.headers.get("origin");

  const allowedOrigins = [
    "https://skillyards.in",
    "https://www.skillyards.in",
    "https://skillyards-website.vercel.app",
    "http://localhost:3001",
  ];

  const isAllowed = origin && allowedOrigins.includes(origin);

  return {
    "Access-Control-Allow-Origin": isAllowed ? origin : "",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };
}