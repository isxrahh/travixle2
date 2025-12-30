// app/api/newsletter/route.ts
import nodemailer from "nodemailer";
import { GoogleGenerativeAI } from "@google/generative-ai";

import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.TravGOOGLE_GENERATIVE_AI_API_KEYixle!);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email required" },
        { status: 400 }
      );
    }

    const subscriberName = email.split("@")[0].replace(/[\W_]/g, " ");
    const formattedName = subscriberName
      .split(" ")
      .filter(Boolean)
      .map((w: string) => w[0].toUpperCase() + w.slice(1).toLowerCase())
      .join(" ");

    const travelStyles = [
      "adventure seeker who loves hiking and off-the-beaten-path experiences",
      "luxury traveler looking for premium resorts and fine dining",
      "culture enthusiast interested in history, art, and traditions",
      "beach lover dreaming of tropical escapes and sunsets",
      "foodie chasing the best local cuisine and street food",
    ];

    const randomStyle =
      travelStyles[Math.floor(Math.random() * travelStyles.length)];

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-pro",
    });

    const prompt = `
      You are a warm, enthusiastic travel writer welcoming a new subscriber to Travixle.
      
      Write a personalized welcome email for: ${formattedName}.
      Their travel style: ${randomStyle}.

      IMPORTANT FORMAT RULES:
      - Do NOT write a subject line inside the content.
      - Do NOT use HTML tags.
      - Use Markdown only (bold, italics, line breaks).

      Include:
      - Friendly greeting and excitement about their subscription
      - 3 inspiring travel ideas or hidden gems (destinations, experiences)
      - 1 practical tip (packing, booking, or saving money)
      - Warm sign-off from the Travixle Team
      - Length: 200-250 words
      - Include light emojis
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;

    const content = response.text();

    const processedContent = content
      .replace(
        /\*\*(.*?)\*\*/g,
        '<strong style="font-weight:700; color:#1e293b;">$1</strong>'
      )
      .replace(
        /\*(.*?)\*/g,
        '<em style="font-style:italic; color:#4b5563;">$1</em>'
      )
      .replace(
        /\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g,
        '<a href="$2" style="color:#6366f1; text-decoration:underline;">$1</a>'
      )
      .replace(/\n\n/g, '</p><p style="margin:18px 0;">')
      .replace(/\n/g, "<br>");

    const html = `
      <body style="margin:0; padding:0; background:#f1f5f9; font-family:system-ui,-apple-system,sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#f1f5f9;">
          <tr>
            <td align="center" style="padding:20px 0;">
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width:600px; margin:0 auto; background:white; border-radius:16px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.1);">
                <!-- Header -->
                <tr>
                  <td style="background:linear-gradient(135deg,#6366f1,#8b5cf6); padding:36px 20px; text-align:center;">
                    <h1 style="font-size:32px; font-weight:700; margin:0;">
                      Welcome to Travixle! ✈️
                    </h1>
                    <p style="font-size:18px; margin:12px 0 0; line-height:1.5;">
                      Your journey to unforgettable travel experiences begins now
                    </p>
                  </td>
                </tr>
      
                <!-- Main Content -->
                <tr>
                  <td style="padding:36px 28px;">
                    <div style="color:#374151; font-size:17px; line-height:1.8;">

                    ${processedContent}
                  
                    <div style="text-align:center; margin-top:32px;">
                      <a href="https://travixle.vercel.app" 
                        style="
                          display:inline-block;
                          background:#6366f1;
                          color:white;
                          padding:14px 24px;
                          text-decoration:none;
                          border-radius:8px;
                          font-weight:600;
                          font-size:16px;
                          margin-top:24px;
                        ">
                        Start Planning My Next Trip ✈️
                      </a>
                    </div>

                  </div>

                  <!-- Footer - INSIDE card -->
                  <div style="margin-top:32px; padding-top:24px; border-top:1px solid #e2e8f0; text-align:center;">
                    <p style="color:#94a3b8; font-size:13px; margin:0; line-height:1.6;">
                      You're receiving this because you subscribed at travixle.vercel.app<br>
                      <a href="#" style="color:#6366f1; text-decoration:underline;">Unsubscribe</a> • 
                      <a href="https://travixle.vercel.app" style="color:#6366f1; text-decoration:underline;">Visit Website</a>
                    </p>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    `;

    await transporter.sendMail({
      from: `"Travixle" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `Welcome to Travixle, ${formattedName}! Your adventure begins ✨`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Nodemailer error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
