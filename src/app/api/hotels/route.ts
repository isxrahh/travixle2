import { NextResponse } from "next/server";
import { weekendDeals as staticWeekend, uniqueProperties as staticUnique, guestFavorites as staticFavorites } from "@/constants";

const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY!;
const HOST = "booking-com.p.rapidapi.com"; // This is the host for Tipsters' Booking.com API

const CHECK_IN = "2025-12-27";
const CHECK_OUT = "2025-12-29";
const ADULTS = "2";
const ROOMS = "1";
const LOCALE = "en-gb";

async function getDestId(cityName: string): Promise<{ dest_id: string; dest_type: string } | null> {
  const res = await fetch(
    `https://${HOST}/v1/hotels/locations?name=${encodeURIComponent(cityName)}&locale=${LOCALE}`,
    {
      headers: {
        "X-RapidAPI-Key": RAPIDAPI_KEY,
        "X-RapidAPI-Host": HOST,
      },
    }
  );
  if (!res.ok) return null;
  const data = await res.json();
  // Find the main city result (usually first with hotels > 1000)
  return data.find((loc: any) => loc.dest_type === "city" && loc.nr_hotels > 1000) || data[0] || null;
}

async function searchHotels(dest_id: string, dest_type: string, order_by = "popularity", limit = 10) {
  const url = new URL(`https://${HOST}/v1/hotels/search`);
  url.searchParams.append("dest_id", dest_id);
  url.searchParams.append("dest_type", dest_type);
  url.searchParams.append("checkin_date", CHECK_IN);
  url.searchParams.append("checkout_date", CHECK_OUT);
  url.searchParams.append("adults_number", ADULTS);
  url.searchParams.append("room_number", ROOMS);
  url.searchParams.append("order_by", order_by);
  url.searchParams.append("locale", LOCALE);
  url.searchParams.append("page_number", "1");
  // Optional: units=metric, filter_by_currency=USD etc.

  const res = await fetch(url.toString(), {
    headers: {
      "X-RapidAPI-Key": RAPIDAPI_KEY,
      "X-RapidAPI-Host": HOST,
    },
  });
  if (!res.ok) return [];
  const json = await res.json();
  return json.result?.slice(0, limit) || [];
}

export async function GET() {
  try {
    // 1. Weekend Deals - London, sorted by price (cheap deals)
    const london = await getDestId("London");
    const weekendDeals = london ? await searchHotels(london.dest_id, london.dest_type, "price", 6) : [];

    // 2. Unique Properties - Paris, sorted by class descending (luxury first)
    const paris = await getDestId("Paris");
    const uniqueProperties = paris ? await searchHotels(paris.dest_id, paris.dest_type, "class_descending", 8) : [];

    // 3. Guest Favorites - Delhi, sorted by popularity/review_score
    const delhi = await getDestId("Delhi");
    const guestFavorites = delhi ? await searchHotels(delhi.dest_id, delhi.dest_type, "review_score", 8) : [];

    // Format to match your MidSection expectations
    const formatHotel = (h: any) => ({
      hotel: {
        name: h.hotel_name || "Beautiful Hotel",
        description: h.review_score_word || h.district || "Stunning location with great amenities",
        media: [{ uri: h.max_1440_photo_url || h.main_photo_url || "https://via.placeholder.com/800x600" }],
        address: h.address || "",
      },
      offers: [{
        price: {
          total: h.min_total_price || h.price || "250",
          currency: h.currency || "USD",
        }
      }],
    });

    return NextResponse.json({
      weekendDeals: weekendDeals.map(formatHotel),
      uniqueProperties: uniqueProperties.map(formatHotel),
      guestFavorites: guestFavorites.map(formatHotel),
    });
  } catch (error) {
    console.error("Booking.com API error:", error);
    // Fallback to static data if quota exceeded or error
    return NextResponse.json({
      weekendDeals: staticWeekend,
      uniqueProperties: staticUnique,
      guestFavorites: staticFavorites,
    });
  }
}