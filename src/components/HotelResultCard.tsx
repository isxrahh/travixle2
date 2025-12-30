import { useState } from "react";
import Link from "next/link";
import convertAndFormatPrice from "@/lib/priceFormatter";
import {
  MapPin,
  Wifi,
  Waves,
  Wind,
  Car,
  Sparkles,
  Bookmark,
  ExternalLink,
  Loader2,
} from "lucide-react";

const HotelResultCard = ({ hotel }: { hotel: any }) => {
  const [aiVerdict, setAiVerdict] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const [isSimulating, setIsSimulating] = useState(false);
  const [aiSimulation, setAiSimulation] = useState<any>(null);
  const [simLoading, setSimLoading] = useState(false);

  const fetchSimulation = async () => {
    if (aiSimulation) {
      setIsSimulating(!isSimulating);
      return;
    }

    setSimLoading(true);
    setIsSimulating(true);
    try {
      const response = await fetch("/api/ai/simulate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          hotelName: hotel.name,
          amenities: hotel.extensions?.join(", "),
          landmark: hotel.nearby_places?.[0]?.name || "Local landmarks",
          description: hotel.description,
        }),
      });
      const data = await response.json();
      setAiSimulation(data);
    } catch (err) {
      console.error(err);
    } finally {
      setSimLoading(false);
    }
  };

  const getBestImage = () => {
    const images = hotel.images || hotel.images_results || hotel.photos || [];
    if (!Array.isArray(images) || images.length === 0) {
      return "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg";
    }
    const highRes = images.find((img: any) => {
      const url = img.thumbnail || img.original || img.url || "";
      return (
        url.includes("highres") ||
        url.includes("maxres") ||
        url.includes("1024")
      );
    });
    const selectedImage = highRes || images[0];
    return typeof selectedImage === "string"
      ? selectedImage
      : selectedImage.thumbnail || selectedImage.original || selectedImage.url;
  };

  const hotelImage = getBestImage();
  const landmark = hotel.nearby_places?.[0]?.name || "Popular Landmark";
  const rating = hotel.rating || hotel.overall_rating || "4.5";

  const fetchAiVerdict = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/ai/verdict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          hotelName: hotel.name,
          description: hotel.description,
          amenities: hotel.extensions?.join(", "),
          landmark: landmark,
        }),
      });
      const data = await response.json();
      setAiVerdict(data);
    } catch (error) {
      console.error("AI Fetch Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const renderAmenities = () => {
    const amenityDataString = [
      ...(hotel.extensions || []),
      ...(hotel.amenities || []),
      hotel.description || "",
    ]
      .join(" ")
      .toLowerCase();
    const iconMap = [
      {
        id: "wifi",
        icon: <Wifi size={12} />,
        label: "WiFi",
        keywords: ["wifi", "wi-fi", "internet"],
      },
      {
        id: "pool",
        icon: <Waves size={12} />,
        label: "Pool",
        keywords: ["pool", "swimming"],
      },
      {
        id: "ac",
        icon: <Wind size={12} />,
        label: "AC",
        keywords: ["ac", "air-conditioned"],
      },
      {
        id: "parking",
        icon: <Car size={12} />,
        label: "Parking",
        keywords: ["parking"],
      },
    ];
    const visible = iconMap
      .filter((item) =>
        item.keywords.some((key) => amenityDataString.includes(key))
      )
      .slice(0, 3);
    return (
      <div className="flex gap-2 mt-3">
        {visible.map((item) => (
          <span
            key={item.id}
            className="flex items-center gap-1 text-[10px] font-medium text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded-full"
          >
            {item.icon} {item.label}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="group relative flex flex-col md:flex-row bg-white border border-zinc-200 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
      <div className="md:w-64 shrink-0 relative overflow-hidden h-52 md:h-auto">
        <img
          src={hotelImage}
          alt={hotel.name}
          className="w-full h-full object-cover transition-opacity duration-700 opacity-0"
          onLoad={(e) => {
            (e.target as HTMLImageElement).classList.remove("opacity-0");
            (e.target as HTMLImageElement).classList.add("opacity-100");
          }}
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80";
            (e.target as HTMLImageElement).classList.remove("opacity-0");
            (e.target as HTMLImageElement).classList.add("opacity-100");
          }}
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-zinc-900 text-[10px] font-bold px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
          <Sparkles size={10} className="text-indigo-500" />
          AI ANALYZED
        </div>
        <div className="absolute bottom-3 right-3 md:hidden bg-blue-600 text-white font-bold px-2 py-1 rounded-lg text-sm">
          {rating}
        </div>
      </div>

      <div className="flex-1 p-5 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-zinc-900 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                {hotel.name}
                <ExternalLink
                  size={14}
                  className="opacity-0 group-hover:opacity-40 transition-opacity"
                />
              </h3>
              <p className="text-xs font-medium text-emerald-600 flex items-center gap-1">
                <MapPin size={12} />
                {landmark}
              </p>
            </div>

            <div className="hidden md:flex flex-col items-end shrink-0">
              <div className="bg-[#003580] text-white px-3 py-2 my-2 rounded-lg font-bold text-md shadow-md shadow-indigo-200">
                {rating}
              </div>
              <p className="text-sm text-zinc-400 my-1 uppercase font-bold tracking-tighter">
                {hotel.reviews || "840"} reviews
              </p>
            </div>
          </div>

          <p className="text-sm text-zinc-500 mt-3 line-clamp-2 leading-snug italic">
            {hotel.description ||
              `${hotel.name} offers a curated stay experience near the city's most iconic landmarks.`}
          </p>

          {renderAmenities()}

          <div className="mt-4 pt-2 border-t border-dashed border-zinc-100">
            {!aiVerdict && !loading && (
              <button
                onClick={fetchAiVerdict}
                className="flex cursor-pointer items-center gap-2 text-purple-600 text-[10px] font-bold tracking-wider hover:text-purple-800 transition-colors uppercase"
              >
                <Sparkles size={14} /> Generate AI Verdict
              </button>
            )}

            {loading && (
              <div className="flex items-center gap-2 text-zinc-400 text-[10px] font-bold uppercase tracking-wider">
                <Loader2 size={14} className="animate-spin" /> Analyzing Hotel
                Data...
              </div>
            )}

            {aiVerdict && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 animate-in fade-in slide-in-from-top-2 duration-500 my-2">
                <div className="bg-purple-50 px-2 py-4 rounded-xl border border-purple-100">
                  <p className="text-md font-semibold text-purple-900 mb-1">
                    ✨ HIGHLIGHT
                  </p>
                  <p className="text-sm text-purple-800 leading-tight">
                    {aiVerdict.highlight}
                  </p>
                </div>
                <div className="bg-amber-50 px-2 py-4 p-2 rounded-xl border border-amber-100">
                  <p className="text-md font-semibold text-amber-900 mb-1">
                    ⚠️ THE CATCH
                  </p>
                  <p className="text-sm text-amber-800 leading-tight">
                    {aiVerdict.catch}
                  </p>
                </div>
                <div className="bg-emerald-50 px-2 py-4 p-2 rounded-xl border border-emerald-100">
                  <p className="text-md font-semibold text-emerald-900 mb-1">
                    📍 LOCAL TIP
                  </p>
                  <p className="text-sm text-emerald-800 leading-tight">
                    {aiVerdict.localSecret}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 flex justify-between items-center border-t border-zinc-50 pt-4">
          <div>
            <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
              Starting from
            </span>
            <p className="text-2xl font-black text-zinc-900 leading-none">
              {hotel.price_per_night?.extracted_price
                ? convertAndFormatPrice(hotel.price_per_night.extracted_price)
                : hotel.price_per_night?.price || "Sold Out"}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2 text-zinc-400 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-all">
              <Bookmark size={20} />
            </button>
            <Link
              href={`/property/${hotel.property_token}`}
              className="bg-zinc-900 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-cyan-700 shadow-lg shadow-zinc-200 hover:shadow-blue-200 transition-all active:scale-95"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelResultCard;
