import { db, users, enquiries } from "@skillyards/db";
import { success, error } from "@/utils/response";


export async function GET() {

  try {
    const data = await db.select().from(enquiries); 
    return success(data, "Enquiries fetched successfully");
  } catch (err) {
    return error("Failed to fetch enquiries", { error: err.message });
  }

}