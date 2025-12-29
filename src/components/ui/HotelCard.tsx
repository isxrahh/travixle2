"use client";

import { useHotelModal } from '@/context/HotelModalContext';

interface HotelCardProps {
  hotelId: string;
  name: string;
  address?: string;
  city?: string;
  country?: string;
  rating?: number;
  reviewCount?: number;
  price?: string;
  photoUrl?: string;
  className?: string;
}

export default function HotelCard({
  hotelId,
  name,
  address,
  city,
  country,
  rating,
  reviewCount,
  price,
  photoUrl,
  className = "",
}: HotelCardProps) {
  const { openHotelDetails } = useHotelModal();

  return (
    <div
      onClick={() => open(hotelId)}
      className={`cursor-pointer bg-white dark:bg-zinc-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 ${className}`}
    >
      {photoUrl ? (
        <img
          src={photoUrl.replace(/square60/g, 'square600')} // better quality
          alt={name}
          className="w-full h-48 object-cover"
        />
      ) : (
        <div className="w-full h-48 bg-gradient-to-br from-indigo-200 to-purple-200 dark:from-indigo-900 dark:to-purple-900" />
      )}

      <div className="p-5">
        <h3 className="text-lg font-bold text-zinc-900 dark:text-white line-clamp-2 mb-1">
          {name}
        </h3>

        {(address || city || country) && (
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
            {address || `${city}, ${country}`}
          </p>
        )}

        {rating && (
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-bold text-indigo-600 bg-indigo-100 dark:bg-indigo-900/50 px-2 py-1 rounded">
              {rating}
            </span>
            {reviewCount && (
              <span className="text-xs text-zinc-500">({reviewCount} reviews)</span>
            )}
          </div>
        )}

        {price && (
          <p className="text-xl font-bold text-zinc-900 dark:text-white">
            {price}
            <span className="text-sm font-normal text-zinc-500"> / night</span>
          </p>
        )}
      </div>
    </div>
  );
}