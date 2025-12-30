import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_API_KEY || "");

export async function POST(req: Request) {
  try {
    const { hotelName, description, amenities, landmark } = await req.json();

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro" });

    const prompt = `
      You are a professional travel critic. Analyze this hotel:
      Name: ${hotelName}
      Description: ${description}
      Amenities: ${amenities}
      Nearby: ${landmark}

      Provide a JSON response with exactly three fields (max 15 words each):
      1. "highlight": The best thing about this hotel.
      2. "catch": A small realistic downside or something to watch out for.
      3. "localSecret": A tip about the neighborhood or a nearby activity.
    `;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text().replace(/```json|```/g, "");
    
    return NextResponse.json(JSON.parse(text));
  } catch (error) {
    return NextResponse.json({ error: "AI logic failed" }, { status: 500 });
  }
}