import { resend } from "./resend.client";

export async function sendTestEmail() {

  try {

    const response = await resend.emails.send({
      from: "Skillyards <onboarding@resend.dev>",
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