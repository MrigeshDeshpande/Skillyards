import { NextResponse } from 'next/server';
import { validateEnquiry } from '@/modules/enquiries/enquiry.schema';
import { createEnquiryService, getAllEnquiries, getAllEnquiriesService } from '@/modules/enquiries/enquiry.service';
import { success, error } from '@/utils/response';

export async function POST(request) {
    try {
        const body = await request.json();
        const validation = validateEnquiry(body);

        if (!validation.success) {
            return NextResponse.json(
                error("Validation failed", validation.error.flatten()),
                { status: 400 }
            );
        }

        const enquiry = await createEnquiryService(validation.data);
        return NextResponse.json(success(enquiry, "Enquiry submitted successfully"), { status: 201 });
    } catch (err) {
        return NextResponse.json(error("Failed to submit enquiry: ", err.message), { status: 500 });
    }
}

export async function GET() {
    try {
        const data = await getAllEnquiriesService();

        console.log(data);

        return NextResponse.json(
            success(data, "Enquiries fetched successfully"),
            { status: 200 }
        );

    } catch (err) {
        console.error(err);

        return NextResponse.json(
            error("Failed to fetch enquiries", { error: err.message }),
            { status: 500 }
        );
    }
}