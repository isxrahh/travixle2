import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  MapPin,
  Star,
  ShieldCheck,
  TrendingUp,
  Info,
} from "lucide-react";

import { platformFaqs } from "@/constants";

import convertAndFormatPrice from "@/lib/priceFormatter";
import ContinentExplorer from "@/components/hotel/ContinentSection";

async function getSearchApiData(slug: string) {
  const API_KEY = process.env.SEARCHAPI_API_KEY;

  const params = new URLSearchParams({
    engine: "google_hotels",
    q: `${slug}s in New Delhi`,
    api_key: API_KEY || "",
    check_in_date: "2026-1-2",
    check_out_date: "2026-1-5",
  });

  const res = await fetch(`https://www.searchapi.io/api/v1/search?${params}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    const errorData = await res.json();
    console.error("SearchApi Error Detail:", errorData);
    throw new Error(`SearchApi failed: ${errorData.error || res.statusText}`);
  }

  return res.json();
}

// Function to fetch a single top hotel for a specific city
async function getTrendingHotel(city: string) {
  const API_KEY = process.env.SEARCHAPI_API_KEY;
  const params = new URLSearchParams({
    engine: "google_hotels",
    q: `best luxury hotel in ${city}`,
    api_key: API_KEY || "",
    check_in_date: "2026-1-2",
    check_out_date: "2026-1-5",
  });

  const res = await fetch(`https://www.searchapi.io/api/v1/search?${params}`, {
    next: { revalidate: 3600 },
  });
  const data = await res.json();
  // Return the first property found for this city
  return data.properties?.[0];
}

export default async function PropertyTypePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const data = await getSearchApiData(slug);
  const properties = data.properties || [];
  const mainData = await getSearchApiData(slug);
  const mainProperties = mainData.properties?.slice(0, 6) || [];

  const trendingCities = [
    "Italy",
    "France",
    "Spain",
    "Morocco",
    "Barcelona",
    "Finland",
    "Denmark",
    "Australia",
    "Japan",
    "China",
    "Singapore",
  ];
  const trendingHotels = await Promise.all(
    trendingCities.map((city) => getTrendingHotel(city))
  );
  return (
    <div className="min-h-screen bg-white">
      <div className=" text-gray-800 py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold capitalize">Top {slug} in India</h1>
          <p className="opacity-80 mt-6 ml-2 text-lg">
            Discover the best-rated stays curated for you.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-6">
        {properties.slice(0, 6).map((item: any) => (
          <div
            key={item.property_token}
            className="flex cursor-pointer flex-row border border-zinc-200 rounded-xl overflow-hidden hover:shadow-md transition-all bg-white h-52"
          >
            <div className="relative w-40 md:w-56 h-full flex-shrink-0">
              <img
                src={item.images?.[0]?.thumbnail || "/placeholder.jpg"}
                className="w-full h-full object-cover"
                alt={item.name}
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-2 left-2 bg-white/90 px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                <Star
                  size={10}
                  fill="currentColor"
                  className="text-yellow-500"
                />
                <span className="text-[10px] font-bold">Top Choice</span>
              </div>
            </div>

            <div className="p-3 md:p-4 flex flex-col justify-between flex-1 min-w-0">
              <div>
                <div className="flex justify-between items-start gap-2">
                  <h3 className="text-md md:text-lg font-bold text-gray-800 leading-tight line-clamp-2 hover:underline cursor-pointer">
                    {item.name}
                  </h3>
                  <div className="bg-[#003580] text-white text-sm font-bold w-10 h-10 flex items-center justify-center rounded-t-md rounded-br-md shrink-0">
                    {item.rating || "N/A"}
                  </div>
                </div>

                <div className="flex items-center gap-1 mt-1">
                  <MapPin size={12} className="text-zinc-400" />
                  <p className="text-sm text-gray-600 truncate">New Delhi</p>
                </div>
              </div>

              <div className="flex justify-between items-end">
                <div className="flex flex-col">
                  <div className="flex items-center gap-1 text-[#008009] text-xs mb-2 font-bold">
                    <ShieldCheck size={12} />
                    <span>Free cancellation</span>
                  </div>
                  <p className="text-sm text-zinc-500 mt-1 mb-2">
                    Starting from
                  </p>
                  <p className="text-2xl font-bold text-zinc-900 leading-none">
                    {convertAndFormatPrice(item.price_per_night)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-zinc-100 mt-10">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-zinc-900">
            Trending Destinations
          </h2>
          <p className="text-zinc-500 text-lg mt-2 ml-2">
            Explore top-rated stays across India
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {" "}
            {trendingHotels.map(
              (hotel, index) =>
                hotel && (
                  <CarouselItem
                    key={hotel.property_token}
                    className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="group cursor-pointer my-4 flex flex-col h-[550px] bg-white rounded-lg overflow-hidden border border-zinc-100 hover:shadow-lg transition-all duration-300">
                      <div className="relative h-94 w-full overflow-hidden shrink-0">
                        <img
                          src={
                            hotel.images?.[0]?.thumbnail ||
                            "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg"
                          }
                          alt={hotel.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>

                      <div className="p-5 flex flex-col flex-1">
                        <div className="flex justify-between items-start gap-4">
                          <div className="flex-1 min-w-0">
                            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">
                              {trendingCities[index]}
                            </p>
                            <h3 className="text-lg font-bold text-zinc-900 leading-tight line-clamp-2">
                              {hotel.name}
                            </h3>
                          </div>

                          <div className="shrink-0 text-right">
                            <p className="text-[10px] text-zinc-500 font-medium">
                              Starting from
                            </p>
                            <p className="text-xl font-bold text-zinc-900 whitespace-nowrap">
                              {convertAndFormatPrice(hotel.price_per_night)}
                            </p>
                          </div>
                        </div>

                        <div className="mt-auto flex items-center gap-1.5 text-gray-700">
                          <TrendingUp
                            size={20}
                            className="text-green-700"
                            strokeWidth={2.5}
                          />
                          <span className="text-sm font-semibold text-green-700">
                            Popular with other travelers
                          </span>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                )
            )}
          </CarouselContent>

          <div className="hidden md:block">
            <CarouselPrevious className="-left-12" />
            <CarouselNext className="-right-12" />
          </div>
        </Carousel>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="bg-blue-50 p-3 rounded-full mb-4">
            <Info className="text-[#006ce4]" size={32} />
          </div>
          <h2 className="text-3xl font-bold text-zinc-900 tracking-tight">
            Platform Support & Help
          </h2>
          <p className="text-zinc-500 mt-2 text-lg max-w-lg">
            Everything you need to know about booking, payments, and our service
            guarantees.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {platformFaqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-zinc-200 rounded-xl px-6 bg-white hover:bg-zinc-50/50 transition-all duration-200 shadow-sm"
            >
              <AccordionTrigger className="text-left font-semibold text-zinc-800 hover:no-underline py-5 text-base md:text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-zinc-600 pb-5 leading-relaxed text-sm md:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Trust Badge Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center border-t border-zinc-100 pt-12">
          <div>
            <p className="font-bold text-zinc-900">Secure Payments</p>
            <p className="text-xs text-zinc-500 mt-1">
              SSL Encrypted Transactions
            </p>
          </div>
          <div>
            <p className="font-bold text-zinc-900">24/7 Support</p>
            <p className="text-xs text-zinc-500 mt-1">
              We're here to help anytime
            </p>
          </div>
          <div>
            <p className="font-bold text-zinc-900">Instant Confirmation</p>
            <p className="text-xs text-zinc-500 mt-1">No waiting for emails</p>
          </div>
        </div>
      </section>

      <section>
        <ContinentExplorer />
      </section>
    </div>
  );
}
