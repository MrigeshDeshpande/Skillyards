export function corsHeaders(request) {
  const allowedOrigins = [
    "https://skillyards.in",
    "https://www.skillyards.in",
    "https://skillyards-website.vercel.app",
    "http://localhost:3001",
  ];

  const origin = request.headers.get("origin");

  return {
    "Access-Control-Allow-Origin": allowedOrigins.includes(origin)
      ? origin
      : "null",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization"
  };
}