import { getAllEnquiries } from '@/modules/enquiries/enquiry.repository';
import { success, error } from '@/utils/response';

export async function GET() {

    try {
        const data = await getAllEnquiries();
        return success(data, "Enquiries fetched successfully");
    } catch (err) {
        return error("Failed to fetch enquiries", { error: err.message });
    }
}