export function corsHeaders() {
  const origin =
    process.env.NODE_ENV === "development"
      ? "*"
      : "https://skillyards-website.vercel.app";

  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization"
  };
}