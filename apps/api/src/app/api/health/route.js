import { success, error } from "@/utils/response";

export async function GET() {

  try {
    return success({
      status: "ok",
      service: "skillyards-api",
      version: "1.0.0",
      uptime: process.uptime(),
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    return error("Health check failed", { error: err.message });
  } 
}
