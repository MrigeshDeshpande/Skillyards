export async function GET() {
  return Response.json({
    status: "ok",
    service: "skillyards-api",
    version: "1.0.0",
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
}
