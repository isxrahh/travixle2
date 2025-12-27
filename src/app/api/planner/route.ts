// app/api/planner/route.ts
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(request: Request) {
  try {
    const { destination, days, budget, preferences } = await request.json();

    if (!destination || !days) {
      return NextResponse.json(
        { error: "Destination and days are required" },
        { status: 400 }
      );
    }

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash-lite",
      generationConfig: {
        temperature: 0.9,
        topP: 0.95,
        maxOutputTokens: 2048,
      },
    });

const prompt = `Create a beautiful, well-spaced ${days}-day itinerary for ${destination}.

Budget: ${budget}
Interests: ${preferences.length ? preferences.join(", ") : "sightseeing, culture, food"}

Use ONLY clean Markdown. NO HTML like <br>.

- Use - for bullet points (with a blank line before and after each list)
- Add blank lines between every section and subsection for spacing
- Use ### for Morning/Afternoon/Evening

Structure:

# ${days}-Day ${destination} Trip ✈️

## Overview
[Exciting intro]

## Day 1: [Creative title]

### 🌅 Morning

- Bullet 1
- Bullet 2

### ☀️ Afternoon

- Bullet 1
- Bullet 2

### 🌙 Evening

- Bullet 1
- Bullet 2

(Continue the same structure for every day with a unique theme title)

## Travel Tips
- Getting around
- Approximate daily budget
- Packing essentials
- Local etiquette or safety note

Bon voyage! May this trip create memories that last a lifetime 🌟
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const itinerary = response.text();

    return NextResponse.json({ itinerary });
  } catch (error: any) {
    console.error("Gemini error:", error);
    return NextResponse.json(
      { error: "Failed to generate itinerary. Rate limit or API issue." },
      { status: 500 }
    );
  }
}
