import { db, users } from "@skillyards/db";
import { success, error } from "@/utils/response";


export async function GET() {

  try {
    const result = await db.select().from(users);
    return success(result, "Users fetched successfully");
  } catch (err) {
    return error("Failed to fetch users", { error: err.message });
  }

}