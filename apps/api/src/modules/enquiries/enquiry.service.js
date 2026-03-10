// this file contains the business logic for handling enquiries

import { createEnquiry, getAllEnquiries } from "./enquiry.repository";
import { verifyCaptcha } from "@/integrations/captcha/captcha";
import {
  sendAdminEnquiryNotification,
  sendUserConfirmation
} from "@/modules/notifications/email.service";

export async function createEnquiryService(enquiryData) {
  try {

    const { captchaToken, ...dbData } = enquiryData;

    const isValidCaptcha = await verifyCaptcha(captchaToken);

    if (!isValidCaptcha) {
      throw new Error("Captcha verification failed");
    }

    const newEnquiry = await createEnquiry(dbData);

    // send emails
    await sendAdminEnquiryNotification(newEnquiry);
    await sendUserConfirmation(newEnquiry);

    return newEnquiry;

  } catch (err) {

    console.error("Create enquiry service error:", err);
    throw new Error(`Create enquiry service failed: ${err.message}`);

  }
}

export async function getAllEnquiriesService() {
  try {

    const enquiries = await getAllEnquiries();
    return enquiries;

  } catch (err) {

    console.error("Fetch enquiries service error:", err);
    throw new Error(`Fetch enquiries service failed: ${err.message}`);

  }
}