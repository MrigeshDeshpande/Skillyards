export function adminEnquiryTemplate(enquiry) {
  return `
    <h2>New Enquiry Received</h2>
    <p><strong>Name:</strong> ${enquiry.firstName} ${enquiry.lastName || ""}</p>
    <p><strong>Email:</strong> ${enquiry.email}</p>
    <p><strong>Phone:</strong> ${enquiry.phone || "N/A"}</p>
    <p><strong>Message:</strong></p>
    <p>${enquiry.message}</p>
  `;
}

export function userConfirmationTemplate(enquiry) {
  return `
    <h2>Thank you for contacting Skillyards</h2>
    <p>Hello ${enquiry.firstName},</p>
    <p>We have received your enquiry and our team will get back to you shortly.</p>
    <p>Best regards,<br/>Skillyards Team</p>
  `;
}