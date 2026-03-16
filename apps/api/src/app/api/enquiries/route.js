import { NextResponse } from "next/server";
import { validateEnquiry } from "@/modules/enquiries/enquiry.schema";
import { createEnquiryService, getAllEnquiriesService } from "@/modules/enquiries/enquiry.service";
import { success, error } from "@/utils/response";
import { corsHeaders } from "@/utils/cors";

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders() });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const validation = validateEnquiry(body);

    if (!validation.success) {
      return NextResponse.json(
        error("Validation failed", validation.error.flatten()),
        { status: 400, headers: corsHeaders() }
      );
    }

    const enquiry = await createEnquiryService(validation.data);

    return NextResponse.json(
      success(enquiry, "Enquiry submitted successfully"),
      { status: 201, headers: corsHeaders() }
    );

  } catch (err) {
    return NextResponse.json(
      error("Failed to submit enquiry", err.message),
      { status: 500, headers: corsHeaders() }
    );
  }
}

export async function GET() {
  try {
    const data = await getAllEnquiriesService();

    return NextResponse.json(
      success(data, "Enquiries fetched successfully"),
      { status: 200, headers: corsHeaders() }
    );

  } catch (err) {
    return NextResponse.json(
      error("Failed to fetch enquiries", err.message),
      { status: 500, headers: corsHeaders() }
    );
  }
}