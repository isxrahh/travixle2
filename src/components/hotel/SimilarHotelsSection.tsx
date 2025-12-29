import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";

import {
  getAiSimilarHotels,
  AiHotel,
} from "@/app/api/hotel-recommendations/route";

interface SimilarHotelsProps {
  hotel: {
    place: string;
  };
}

const IMAGE_MAP: Record<number, string> = {
  1: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800",
  2: "https://plus.unsplash.com/premium_photo-1687960117069-567a456fe5f3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  3: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  4: "https://images.unsplash.com/photo-1657349226767-66c983d7df39?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  5: "https://images.unsplash.com/photo-1454388683759-ee76c15fee26?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const currencyFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

export default async function SimilarHotels({ hotel }: SimilarHotelsProps) {
  const similarHotels: AiHotel[] = await getAiSimilarHotels(hotel.place);
  return (
    <section className="border-t border-zinc-100 dark:border-zinc-800">
      <div className="flex items-center gap-2 mb-2">
        <h2 className="text-3xl font-bold">More stays in {hotel.place}</h2>
        <span className="bg-indigo-100 text-indigo-700 whitespace-nowrap text-xs px-6 py-3 rounded-full font-bold uppercase tracking-wider">
          AI Recommended
        </span>
      </div>
      <p className="text-zinc-500 mb-8">
        Handpicked alternatives generated in real-time by Gemini
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {similarHotels.map((item, index) => {
          const displayImage =
            IMAGE_MAP[item.photoId as number] || IMAGE_MAP[1];

          return (
            <Link
              key={`${item.hotelId}-${index}`}
              href={`/hotels/${item.hotelId}`}
              className="group flex flex-col bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={displayImage}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/90 dark:bg-black/70 backdrop-blur-md px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />{" "}
                  {item.reviewPoint}
                </div>
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h4 className="font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 transition truncate">
                  {item.name}
                </h4>
                <p className="text-xs text-zinc-500 mb-3">{item.place}</p>
                <div className="mt-auto flex justify-between items-end">
                  <div>
                    <p className="text-[10px] text-zinc-400 line-through leading-none">
                      {currencyFormatter.format(+item.fakePrice)}
                    </p>
                    <div className="flex items-baseline gap-1 mt-1">
                      <p className="text-lg font-bold text-zinc-900 dark:text-white leading-none">
                        {currencyFormatter.format(+item.price)}
                      </p>
                      <span className="text-[10px] font-medium text-zinc-500 dark:text-zinc-400">
                        / night
                      </span>
                    </div>
                  </div>
                  <span className="text-indigo-600 p-2 rounded-full bg-indigo-50 dark:bg-indigo-900/30 group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
