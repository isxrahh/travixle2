import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const rawQuery = searchParams.get("q") || "";
  
  const continent = rawQuery
    .replace(/best luxury hotels in /i, "") 
    .trim();

  const countryClusters: Record<string, string[]> = {
    "Asia": ["India", "Japan", "Thailand"],
    "Europe": ["France", "Italy", "UK"],
    "North America": ["USA", "Mexico", "Canada"],
    "Africa": ["Egypt", "South Africa", "Morocco"],
    "South America": ["Brazil", "Argentina"],
    "Oceania": ["Australia", "New Zealand"]
  };

  const countriesToSearch = countryClusters[continent] || [continent];
  const API_KEY = process.env.SEARCHAPI_API_KEY;

  try {
    const requests = countriesToSearch.map(country => {
      const url = new URL("https://www.searchapi.io/api/v1/search");
      url.searchParams.set("engine", "google_hotels");
      url.searchParams.set("q", `best hotels in ${country}`);
      url.searchParams.set("api_key", API_KEY!);
      url.searchParams.set("gl", "us");
      url.searchParams.set("hl", "en");
      url.searchParams.set("num", "6");
      
      url.searchParams.set("check_in_date", "2026-01-05");
      url.searchParams.set("check_out_date", "2026-01-10");
      
      return fetch(url.toString()).then(res => res.json());
    });

    const results = await Promise.all(requests);
    
    const combinedHotels = results.flatMap(data => {
      return data.properties || data.hotels || [];
    });

    console.log(`Continent: ${continent} | Found: ${combinedHotels.length} hotels`);

    return NextResponse.json({ properties: combinedHotels });
  } catch (error) {
    console.error("Route Error:", error);
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}