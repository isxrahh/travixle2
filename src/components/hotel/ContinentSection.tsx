"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import convertAndFormatPrice from "@/lib/priceFormatter";

const continents = [
  "Asia",
  "Europe",
  "North America",
  "Africa",
  "South America",
  "Oceania",
];

export default function ContinentExplorer() {
  const [activeContinent, setActiveContinent] = useState("Asia");
  const [hotels, setHotels] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const continentMap: Record<string, string> = {
    Asia: "India, Japan, Thailand, Bali",
    Europe: "France, Italy, Spain, and United Kingdom",
    "North America": "USA, Canada, and Mexico",
    Africa: "South Africa, Egypt, and Morocco",
    "South America": "Brazil, Argentina, and Peru",
    Oceania: "Australia and New Zealand",
  };

  useEffect(() => {
    const fetchHotels = async () => {
      setLoading(true);
      try {
        const searchCity = continentMap[activeContinent] || activeContinent;
        const response = await fetch(
          `/api/continents?q=best+luxury+hotels+in+${searchCity}`
        );
        const data = await response.json();

        console.log("Full API Response:", data);

        const results = data.properties || data.hotels || [];

        if (results.length > 0) {
          setHotels(results.slice(0, 16));
        } else {
          setHotels([]);
        }
      } catch (error) {
        console.error("Fetch error:", error);
        setHotels([]);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, [activeContinent]);
  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-zinc-900 mb-2">
          Explore by Continent
        </h2>
        <p className="text-zinc-500 mb-8">
          Quickly find top-rated stays in your favorite region.
        </p>

        <div className="flex gap-3 mb-10 overflow-x-auto pb-4 scrollbar-hide">
          {continents.map((continent) => (
            <button
              key={continent}
              onClick={() => setActiveContinent(continent)}
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all whitespace-nowrap border ${
                activeContinent === continent
                  ? "bg-[#006ce4] text-white border-[#006ce4] shadow-md"
                  : "bg-white text-zinc-600 border-zinc-200 hover:border-[#006ce4] hover:text-[#006ce4]"
              }`}
            >
              {continent}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
          {loading ? (
            Array(16)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="h-20 w-full bg-zinc-50 animate-pulse rounded-xl border border-zinc-100"
                />
              ))
          ) : hotels.length > 0 ? (
            hotels.map((hotel, index) => (
              <Link
                href={`/property/${hotel.property_token}`}
                key={hotel.property_token || index}
                className="flex items-center gap-4 p-3 rounded-xl border border-transparent hover:border-zinc-200 hover:bg-zinc-50/50 transition-all group"
              >
                <div className="h-16 w-16 md:h-20 md:w-20 shrink-0 rounded-lg overflow-hidden bg-zinc-100">
                  <img
                    src={
                      hotel.images?.[0]?.thumbnail ||
                      "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg"
                    }
                    alt={hotel.name || "Hotel"}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-zinc-900 truncate text-sm md:text-base">
                    {hotel.name}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="bg-zinc-100 text-zinc-600 text-[10px] px-1.5 py-0.5 rounded uppercase font-bold">
                      {hotel.location?.split(",").pop() || activeContinent}
                    </span>
                    <span className="text-zinc-300">|</span>
                    <p className="text-[11px] text-zinc-500 truncate">
                      {hotel.rating} Rating
                    </p>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-xs text-zinc-400 font-medium">From</p>
                  <p className="text-base md:text-lg font-bold text-zinc-900 leading-none">
                    {hotel.price_per_night
                      ? convertAndFormatPrice(hotel.price_per_night)
                      : "₹ Check Price"}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full py-10 text-center text-zinc-400 italic">
              No properties found in {activeContinent} at the moment.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
