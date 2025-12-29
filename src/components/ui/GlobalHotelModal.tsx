"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useHotelModal } from "@/context/HotelModalContext";

export default function GlobalHotelModal() {
  const { hotelId, closeHotelDetails } = useHotelModal();
  const [mounted, setMounted] = useState(false);
  const [hotel, setHotel] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!hotelId) {
      setHotel(null);
      return;
    }

    const fetchHotel = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/hotel-details?hotel_id=${hotelId}`);
        if (!res.ok) throw new Error("Failed to load");
        const data = await res.json();
        setHotel(data);
      } catch {
        setError("Could not load hotel details.");
      } finally {
        setLoading(false);
      }
    };

    fetchHotel();
  }, [hotelId]);

  if (!mounted || !hotelId) return null;

  const modalContent = (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-md">
      <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-zinc-950 rounded-3xl shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 p-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex justify-between items-center rounded-t-3xl">
          <h2 className="text-2xl font-bold">
            {hotel?.hotel_name || "Hotel Details"}
          </h2>
          <button
            onClick={closeHotelDetails}
            className="p-2 hover:bg-white/20 rounded-xl transition"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="p-8">
          {loading && (
            <div className="text-center py-20">
              <div className="inline-block w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4">Loading details...</p>
            </div>
          )}

          {error && <p className="text-red-500 text-center">{error}</p>}

          {hotel && (
            <>
              {hotel.main_photo_url ? (
                <img
                  src={hotel.main_photo_url.replace("square60", "square1400")}
                  alt={hotel.hotel_name}
                  className="w-full h-96 object-cover rounded-2xl mb-8 shadow-xl"
                />
              ) : hotel.photos?.[0]?.url_max ? (
                <img
                  src={hotel.photos[0].url_max}
                  alt="Hotel"
                  className="w-full h-96 object-cover rounded-2xl mb-8"
                />
              ) : null}

              {/* Hotel Details */}
              <div className="space-y-6">
                <h3 className="text-4xl font-bold">
                  {hotel.hotel_name || hotel.name}
                </h3>
                <p className="text-xl text-zinc-600 dark:text-zinc-400">
                  {hotel.address}, {hotel.city}, {hotel.zip}{" "}
                  {hotel.country_trans || hotel.country}
                </p>

                {/* Rating */}
                {hotel.review_score && (
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-bold text-indigo-600 bg-indigo-100 dark:bg-indigo-900/50 px-4 py-2 rounded-lg">
                      {hotel.review_score}
                    </span>
                    <div>
                      <p className="font-semibold">{hotel.review_score_word}</p>
                      <p className="text-sm text-zinc-500">
                        {hotel.review_nr || hotel.number_of_reviews} reviews
                      </p>
                    </div>
                  </div>
                )}

                {/* Description */}
                {hotel.description && (
                  <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    {hotel.description}
                  </p>
                )}

                {/* Facilities */}
                {hotel.facilities && (
                  <div>
                    <h4 className="text-xl font-semibold mb-4">
                      Popular Facilities
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {hotel.facilities
                        .slice(0, 9)
                        .map((facility: string, i: number) => (
                          <div key={i} className="flex items-center gap-2">
                            <span className="text-indigo-600">✓</span>
                            <span>{facility}</span>
                          </div>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
