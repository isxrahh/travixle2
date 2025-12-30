import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { vibe, focus } = await req.json();

    let queryParts = ["best hotels"];
    if (vibe < 35) queryParts.push("quiet boutique hidden gem");
    else if (vibe > 65) queryParts.push("central urban lifestyle energy");
    if (focus < 35) queryParts.push("heritage architecture culture");
    else if (focus > 65) queryParts.push("modern luxury resort amenities");

    const searchQuery = queryParts.join(" ");
    const API_KEY = process.env.SEARCHAPI_API_KEY;

    const url = new URL("https://www.searchapi.io/api/v1/search");
    url.searchParams.set("engine", "google_hotels");
    url.searchParams.set("q", searchQuery);
    url.searchParams.set("api_key", API_KEY!);
    url.searchParams.set("gl", "us");
    url.searchParams.set("hl", "en");
    url.searchParams.set("num", "8"); // Increased for better variety

    url.searchParams.set("check_in_date", "2026-01-05");
    url.searchParams.set("check_out_date", "2026-01-10");

    const response = await fetch(url.toString());
    const data = await response.json();

    const rawHotels = data.hotels || data.properties || [];

    const processedHotels = rawHotels.map((hotel: any) => {
      let image =
        hotel.thumbnail ||
        hotel.max_res_main_image ||
        (hotel.images && hotel.images[0]);

      if (typeof image === "string" && image.startsWith("//")) {
        image = `https:${image}`;
      }

      const finalImage =
        image ||
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80";

      return {
        ...hotel,
        name: hotel.name || hotel.title,
        rating: Number(hotel.rating || 0).toFixed(1),
        thumbnail: finalImage,
      };
    });

    return NextResponse.json({ hotels: processedHotels });
  } catch (error) {
    console.error("Vibe Route Error:", error);
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}
