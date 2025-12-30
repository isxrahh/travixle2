import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { hotelName, amenities, landmark, description } = await req.json();

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro" });

    const prompt = `
      You are a luxury travel concierge. Create a "Day in the Life" simulation for a guest staying at "${hotelName}".
      The hotel is near "${landmark}" and has these features: ${amenities}.
      Description: ${description}

      Provide a 3-part itinerary (Morning, Afternoon, Night) that is specific to this hotel's vibe and location.
      Be creative, evocative, and brief. Return the response as a valid JSON object only, with keys "morning", "afternoon", and "night".
    `;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();
    
    // Clean JSON parsing
    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    const simulationData = jsonMatch ? JSON.parse(jsonMatch[0]) : null;

    return NextResponse.json(simulationData);
  } catch (error) {
    console.error("Simulation Error:", error);
    return NextResponse.json({ error: "Failed to simulate stay" }, { status: 500 });
  }
}