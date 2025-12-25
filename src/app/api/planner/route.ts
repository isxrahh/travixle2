import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { destination, days, budget, preferences } = await req.json();

    if (!destination || !days) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const prompt = `You are an expert travel planner. Create a detailed, realistic ${days}-day itinerary for ${destination}.
                    Budget: ${budget || "moderate"}.
                    Preferences: ${preferences?.join(", ") || "none specified"}.
                    
                    Include for each day:
                    - Morning, afternoon, evening activities
                    - Recommended meals (with cuisine type)
                    - Transportation tips
                    - One top attraction
                    - Estimated daily cost in USD
                    
                    Return the response in clean Markdown format with day headings.
                    `;

    const response = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROK_API_KEY}`,
      },
      body: JSON.stringify({
        model: "grok-3",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.8,
        max_tokens: 1500,
      }),
    });

    if (!response.ok) throw new Error("Grok API Error");

    const data = await response.json();
    const itinerary = data.choices[0].message.content;

    return NextResponse.json({ itinerary });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to generate itinerary" },
      { status: 500 }
    );
  }
}
