import { GoogleGenerativeAI } from "@google/generative-ai";

export interface AiHotel {
  hotelId: string;
  name: string;
  place: string;
  photoId: number; 
  reviewPoint: number;
  fakePrice: string;
  price: string;
}

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_API_KEY!);

export async function getAiSimilarHotels(place: string): Promise<AiHotel[]> {
  const model = genAI.getGenerativeModel({ 
    model: "gemini-2.5-pro",
    generationConfig: { responseMimeType: "application/json" }
  });

 const prompt = `
    Generate 3 unique hotel alternatives in ${place}. 
    For each hotel, assign a "photoId" from 1 to 5. 
    Ensure each hotel in the list has a DIFFERENT photoId.
    
    Return JSON array:
    [{ "hotelId": string, "name": string, "place": string, "photoId": number, "reviewPoint": number, "fakePrice": string, "price": string }]
    
    IMPORTANT: 
  - Prices must be in Indian Rupees (INR).
  - Use realistic hotel prices for ${place} (e.g., between ₹2500 and ₹15000).
  - Return "price" and "fakePrice" as NUMBERS (integers), not strings.
    `;
  const result = await model.generateContent(prompt);
  return JSON.parse(result.response.text());
}