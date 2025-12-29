"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import convertAndFormatPrice from "@/lib/priceFormatter";
import {
  Star,
  MapPin,
  Filter,
  Search,
  ChevronRight,
  ArrowUpDown,
} from "lucide-react";

export default function CitySearchPage() {
  const params = useParams();
  const city = decodeURIComponent(params.city as string);
  const [hotels, setHotels] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [maxPrice, setMaxPrice] = useState<number>(30000);
  const [minRating, setMinRating] = useState<number>(0);
  const [sortBy, setSortBy] = useState<string>("default");

  useEffect(() => {
    const fetchCityHotels = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `/api/continents?q=best+hotels+in+${city}`
        );

        if (!response.ok) throw new Error("Failed to fetch hotels");

        const data = await response.json();
        setHotels(data.properties || []);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    if (city) fetchCityHotels();
  }, [city]);

  const processedHotels = hotels
    .filter((hotel) => {
      const price = hotel.price_per_night?.extracted_price * 84.5 || 0;
      const rating = hotel.overall_rating || hotel.rating || 0;
      return price <= maxPrice && rating >= minRating;
    })
    .sort((a, b) => {
      if (sortBy === "price-low")
        return (
          (a.price_per_night?.extracted_price || 0) -
          (b.price_per_night?.extracted_price || 0)
        );
      if (sortBy === "price-high")
        return (
          (b.price_per_night?.extracted_price || 0) -
          (a.price_per_night?.extracted_price || 0)
        );
      if (sortBy === "rating")
        return (b.overall_rating || 0) - (a.overall_rating || 0);
      return 0; // default
    });
  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <nav className="flex items-center gap-2 text-xs text-zinc-500 mb-4">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <ChevronRight size={12} />
            <span className="capitalize">{city.replace("-", " ")} Hotels</span>
          </nav>
          <h1 className="text-3xl font-bold capitalize text-gray-800">
            {city.replace("-", " ")}: {processedHotels.length} properties found
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="w-full lg:w-72 shrink-0">
            <div className="sticky top-6 space-y-6">
              <div className="bg-white border border-zinc-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-2 font-bold text-zinc-900 mb-6">
                  <Filter size={18} />
                  <span>Filter by:</span>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-bold text-zinc-700 mb-4">
                    Budget: Up to{" "}
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "INR",
                      maximumFractionDigits: 0,
                    }).format(maxPrice)}
                  </label>
                  <input
                    type="range"
                    min="2000"
                    max="50000"
                    step="1000"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full h-2 bg-zinc-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-[10px] text-zinc-400 mt-2">
                    <span>₹2,000</span>
                    <span>₹50,000+</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-sm font-bold text-zinc-700 mb-2">
                    Guest Rating
                  </p>
                  {[4.5, 4, 3.5, 0].map((r) => (
                    <label
                      key={r}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="radio"
                        name="rating"
                        checked={minRating === r}
                        onChange={() => setMinRating(r)}
                        className="w-4 h-4 text-blue-600 border-zinc-300 focus:ring-blue-500"
                      />
                      <span className="text-sm text-zinc-600 group-hover:text-blue-600">
                        {r === 0 ? "All Ratings" : `${r}+ Star`}
                      </span>
                    </label>
                  ))}
                </div>

                <div className="flex items-center gap-2 bg-white border border-zinc-200 rounded-lg px-3 py-2 mt-8 self-start md:self-auto">
                  <ArrowUpDown size={16} className="text-zinc-500" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="text-sm w-full font-bold bg-transparent outline-none cursor-pointer text-zinc-700"
                  >
                    <option value="default">Sort by: Recommended</option>
                    <option value="price-low">Price: Lowest first</option>
                    <option value="price-high">Price: Highest first</option>
                    <option value="rating">Top Reviewed</option>
                  </select>
                </div>

                <button
                  onClick={() => {
                    setMaxPrice(50000);
                    setMinRating(0);
                  }}
                  className="w-full mt-8 text-xs font-bold text-blue-600 hover:underline pt-4 border-t"
                >
                  Clear all filters
                </button>
              </div>

              <div className="bg-[#ebf3ff] border border-blue-100 rounded-xl p-5">
                <p className="text-sm font-bold text-zinc-900 mb-2">
                  Get Instant Discounts
                </p>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Sign in to save up to 15% or more on every booking with
                  Genius.
                </p>
              </div>
            </div>
          </aside>

          <div className="flex-1">
            <div className="grid grid-cols-1 gap-4">
              {loading ? (
                Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <div
                      key={i}
                      className="h-64 w-full bg-white border border-zinc-200 animate-pulse rounded-2xl"
                    />
                  ))
              ) : processedHotels.length > 0 ? (
                processedHotels.map((hotel) => (
                  <HotelResultCard key={hotel.property_token} hotel={hotel} />
                ))
              ) : (
                <div className="bg-white border border-dashed border-zinc-300 rounded-2xl p-12 text-center">
                  <div className="bg-zinc-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="text-zinc-400" />
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900">
                    No properties found
                  </h3>
                  <p className="text-zinc-500">
                    Try adjusting your filters to find more results.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HotelResultCard({ hotel }: { hotel: any }) {
  const landmark =
    hotel.nearby_places?.[0]?.name ||
    hotel.extensions?.find((e: string) => e.toLowerCase().includes("near")) ||
    "City Center";

  const description =
    hotel.description ||
    `${hotel.name} offers a premium stay experience in the heart of the city. Guests can enjoy state-of-the-art facilities, including high-speed internet, 24-hour room service, and luxury bedding. Whether you are traveling for business or leisure, our prime location ensures you are never far from the best dining and shopping experiences available.`;
  return (
    <div className="flex flex-col md:flex-row bg-white border border-zinc-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all border-l-4 border-l-transparent hover:border-l-blue-600 group">
      <div className="md:w-72 shrink-0 relative overflow-hidden">
        <img
          src={
            hotel.images?.[0]?.thumbnail ||
            "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg"
          }
          alt={hotel.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      <div className="flex-1 p-5 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start gap-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-700 group-hover:underline leading-tight">
                {hotel.name}
              </h3>

              <p className="text-[11px] font-bold text-emerald-700 flex items-center gap-1 mt-1">
                <MapPin size={18} className="opacity-20" />
                Beside {landmark}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-zinc-900">Excellent</p>
                <p className="text-[10px] text-zinc-500">
                  {hotel.reviews || "450"} reviews
                </p>
              </div>
              <div className="bg-[#003580] text-white w-9 h-9 flex items-center justify-center rounded-lg font-bold text-sm">
                {hotel.rating || "4.0"}
              </div>
            </div>
          </div>

          <p className="text-xs text-zinc-600 mt-3 line-clamp-3 leading-relaxed">
            {description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="text-[10px] bg-blue-50 text-blue-700 font-bold px-2 py-1 rounded">
              New to our site
            </span>
            <span className="text-[10px] bg-green-50 text-green-700 font-bold px-2 py-1 rounded">
              Luxury Collection
            </span>
          </div>
        </div>

        <div className="mt-6 flex justify-between items-end border-t pt-4 border-zinc-100">
          <div className="flex flex-col">
            <button className="text-[11px] text-blue-600 font-bold hover:underline text-left mb-2">
              Save for later
            </button>
            <p className="text-2xl font-bold text-zinc-900 leading-none">
              {convertAndFormatPrice(hotel.price_per_night)}
            </p>
            <p className="text-[10px] text-zinc-400 mt-1">
              Includes taxes and fees
            </p>
          </div>

          <div className="flex flex-col gap-2 items-end">
            <p className="text-[10px] text-emerald-600 font-bold">
              Limited time deal
            </p>
            <Link
              href={`/property/${hotel.property_token}`}
              className="bg-cyan-700 text-white px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-[#0052ad] transition-colors shadow-sm"
            >
              See availability
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
