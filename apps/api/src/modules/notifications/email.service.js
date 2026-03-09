import { resend } from "./resend.client";

export async function sendTestEmail() {
  try {

    const response = await resend.emails.send({
      from: process.env.EMAIL_FROM || "Skillyards <onboarding@resend.dev>",
      to: ["mrigeshdeshpande246@gmail.com"],
      subject: "Hello World",
      html: "<p>Congrats on sending your <strong>first email</strong>!</p>"
    });

    return response;

  } catch (err) {

    console.error("Email send error:", err);
    throw new Error("Failed to send email");

  }
}

// TODO: switch sender to verified domain after DNS setup
// Required:
// 1. Verify domain skillyards.in in Resend dashboard
// 2. Add DNS records in Namecheap
// 3. Set EMAIL_FROM="Skillyards <admin@skillyards.in>"