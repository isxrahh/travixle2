import { MapPin, ShieldCheck} from "lucide-react";

async function getPropertyDetails(id: string) {
  const API_KEY = process.env.SEARCHAPI_API_KEY;

  const params = new URLSearchParams({
    engine: "google_hotels_property",
    property_token: id,
    api_key: API_KEY || "",
    check_in_date: "2025-12-30",
    check_out_date: "2026-01-05",
    currency: "INR", 
  gl: "in",
  });

  const res = await fetch(`https://www.searchapi.io/api/v1/search?${params}`, {
    next: { revalidate: 3600 }
  });

  if (!res.ok) throw new Error("Failed to fetch property details");
  return res.json();
}

export default async function PropertyDetailsPage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  const data = await getPropertyDetails(id);
  const hotel = data.property_details;

  if (!hotel) return <div className="p-20 text-center">Property details not found.</div>;

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <div className="flex flex-col mb-6">
        <h1 className="text-3xl font-bold text-zinc-900">{hotel.name}</h1>
        <div className="flex items-center gap-2 text-sm text-[#006ce4] mt-2 underline cursor-pointer">
          <MapPin size={16} />
          <span>{hotel.address}</span>
        </div>
      </div>

      <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[450px] rounded-xl overflow-hidden mb-8">
        <div className="col-span-2 row-span-2">
          <img src={hotel.images?.[0]?.thumbnail} className="w-full h-full object-cover hover:opacity-90 transition cursor-pointer" alt="Main" />
        </div>
        <div className="col-span-1 row-span-1">
          <img src={hotel.images?.[1]?.thumbnail} className="w-full h-full object-cover h-full" alt="Sub 1" />
        </div>
        <div className="col-span-1 row-span-1">
          <img src={hotel.images?.[2]?.thumbnail} className="w-full h-full object-cover h-full" alt="Sub 2" />
        </div>
        <div className="col-span-1 row-span-1">
          <img src={hotel.images?.[3]?.thumbnail} className="w-full h-full object-cover h-full" alt="Sub 3" />
        </div>
        <div className="col-span-1 row-span-1 relative bg-zinc-200">
          <img src={hotel.images?.[4]?.thumbnail} className="w-full h-full object-cover opacity-50" alt="Sub 4" />
          <div className="absolute inset-0 flex items-center justify-center text-zinc-900 font-bold">
            +{hotel.images?.length - 4} photos
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <p className="text-zinc-700 leading-relaxed text-md">
            {hotel.description || "No description available for this property."}
          </p>

          <div className="pt-4 border-t border-zinc-100">
            <h3 className="text-xl font-bold mb-4">Most popular facilities</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {hotel.amenities?.slice(0, 9).map((amenity: string) => (
                <div key={amenity} className="flex items-center gap-2 text-sm text-zinc-700">
                  <ShieldCheck size={16} className="text-[#008009]" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="border border-zinc-200 rounded-xl p-4 sticky top-4 bg-white shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="font-bold text-lg text-zinc-900">Property Rating</h4>
                <p className="text-xs text-zinc-500">Based on recent guest stays</p>
              </div>
              <div className="bg-[#003580] text-white px-2 py-1 rounded-t-md rounded-br-md font-bold">
                {hotel.overall_rating}
              </div>
            </div>

            <div className="bg-[#ebf3ff] p-3 rounded-md mb-4">
              <p className="text-xs font-bold text-zinc-900">Highlights</p>
              <p className="text-xs text-zinc-700 mt-1">Top-rated for clean rooms and friendly staff.</p>
            </div>

            <button className="w-full bg-[#006ce4] text-white py-3 rounded-md font-bold hover:bg-[#0052ad] transition">
              Reserve your stay
            </button>
            <p className="text-[10px] text-center text-zinc-500 mt-2">
              You won't be charged yet
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}