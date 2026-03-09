// this file contains the business logic for handling enquiries

import { createEnquiry, getAllEnquiries } from './enquiry.repository';

export async function createEnquiryService(enquiryData) {
    try {
        const newEnquiry = await createEnquiry(enquiryData);
        return newEnquiry;
    } catch (err) {
        throw new Error("Failed to create enquiry: " + err.message);
    }
}

export async function getAllEnquiriesService() {
    try {
        const enquiries = await getAllEnquiries();
        return enquiries;
    } catch (err) {
        throw new Error("Failed to fetch enquiries: " + err.message);
    }
}