import chromium from "@sparticuz/chromium";
import puppeteerCore from "puppeteer-core";
import { resend } from "../notifications/resend.client";
import { certificateTemplate, certificateEmailTemplate } from "./certificate.template";

/**
 * Generate a PDF certificate buffer from HTML using Puppeteer + @sparticuz/chromium.
 * Optimised for Vercel serverless functions.
 *
 * @param {string} html – Full HTML page string
 * @returns {Promise<Buffer>} PDF buffer
 */
async function generatePdfBuffer(html) {
  let browser = null;

  try {
    browser = await puppeteerCore.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    });

    const page = await browser.newPage();

    // Set viewport to exact certificate dimensions to prevent margin drift
    await page.setViewport({ width: 842, height: 595 });

    await page.setContent(html, { waitUntil: "networkidle0" });

    const pdfBuffer = await page.pdf({
      width: "842px",
      height: "595px",
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: "0px", right: "0px", bottom: "0px", left: "0px" },
    });

    return Buffer.from(pdfBuffer);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

/**
 * Full certificate pipeline:
 * 1. Render HTML certificate
 * 2. Convert to PDF via Puppeteer
 * 3. Send via Resend with PDF attachment
 *
 * @param {Object} data
 * @param {string} data.name
 * @param {string} data.email
 * @param {number} data.score
 * @param {number} data.total
 * @param {string[]} data.topics
 * @param {string} data.certificateId – Session UUID
 * @param {Date}   data.completedAt
 */
export async function generateAndSendCertificate({
  name,
  email,
  score,
  total,
  topics,
  certificateId,
  completedAt,
}) {
  const percentage = Math.round((score / total) * 100);

  const date = new Date(completedAt).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  // 1️⃣ Render certificate HTML
  const html = certificateTemplate({
    name,
    score,
    total,
    percentage,
    topics: [...new Set(topics)], // deduplicate
    date,
    certificateId,
  });

  // 2️⃣ Generate PDF
  const pdfBuffer = await generatePdfBuffer(html);

  // 3️⃣ Send email with PDF attachment
  await resend.emails.send({
    from: process.env.EMAIL_FROM || "SkillYards <certificates@skillyards.in>",
    to: [email],
    subject: `🏆 Your SkillYards Certificate — ${percentage}% Score`,
    html: certificateEmailTemplate({ name, percentage, score, total }),
    attachments: [
      {
        filename: `SkillYards-Certificate-${name.replace(/\s+/g, "-")}.pdf`,
        content: pdfBuffer.toString("base64"),
      },
    ],
  });

  console.log(`✅ Certificate sent to ${email} (${percentage}%)`);
}
