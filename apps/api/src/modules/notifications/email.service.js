import { resend } from "./resend.client";
import {
  adminEnquiryTemplate,
  userConfirmationTemplate
} from "./email.template";

/**
 * Sends email to admin notifying about a new enquiry
 */
export async function sendAdminEnquiryNotification(enquiry) {
  return resend.emails.send({
    from: process.env.EMAIL_FROM || "Skillyards <onboarding@resend.dev>", // TODO: switch after DNS verified
    to: [process.env.ADMIN_EMAIL || "hello@skillyards.in"],
    subject: "New enquiry from Skillyards website",
    html: adminEnquiryTemplate(enquiry)
  });
}

/**
 * Sends confirmation email to the user
 */
export async function sendUserConfirmation(enquiry) {
  return resend.emails.send({
    from: process.env.EMAIL_FROM || "Skillyards <onboarding@resend.dev>", // TODO: switch after DNS verified
    to: [enquiry.email],
    subject: "We received your enquiry",
    html: userConfirmationTemplate(enquiry)
  });
}