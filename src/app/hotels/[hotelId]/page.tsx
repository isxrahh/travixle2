// src/app/hotels/[hotelId]/page.tsx
import { guestFavorites, hotels, weekendDeals } from "@/constants";
import { notFound } from "next/navigation";
import {
  Bed,
  Wifi,
  Car,
  Dumbbell,
  Coffee,
  Users,
  Waves,
  Wind,
  Bath,
  MapPin,
  Star,
  ShieldCheck,
  Leaf,
  ChevronRight,
  Info,
  Clock,
  Calendar,
  ThumbsUp,
  Check,
  ArrowRight,
  Map,
  Plane,
  Train,
  Landmark,
  Sparkles,
  Ban,
  CreditCard,
  MessageSquare,
  HelpCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HotelGallery from "@/components/hotel/HotelGallery";

import {
  uniqueProperties,
  weekendDeals as weekendDealsData,
} from "@/constants";
import { UniqueProperty, WeekendDeals, RoomType, FAQ } from "@/types"; 
import SimilarHotels from "@/components/hotel/SimilarHotelsSection";

const amenityIcons: Record<string, any> = {
  "Private Beach": Waves,
  "Multiple Pools": Waves,
  "Award-Winning Spa": Bath,
  "8 Restaurants": Coffee,
  "Kids Club": Users,
  "Free WiFi": Wifi,
  Gym: Dumbbell,
  "Butler Service": Users,
  Parking: Car,
  "Indoor Pool": Waves,
  "Michelin Restaurant": Coffee,
  Sauna: Wind,
};


export default async function HotelDetailsPage({
  params,
}: {
  params: Promise<{ hotelId: string }>;
}) {
const { hotelId } = await params;

// 1. Merge all data sources
const allHotels = [...uniqueProperties, ...weekendDealsData, ...guestFavorites];

// 2. Find the hotel by checking both ID and hotelId
const hotel = allHotels.find((h) => {
  const slugMatch = "hotelId" in h && h.hotelId === hotelId;
  const idMatch = h.id.toString() === hotelId;
  return slugMatch || idMatch;
});

if (!hotel) return notFound();

// 3. Similar Hotels (Mixing Unique and Favorites for better UI)
// We cast to 'any' briefly to bypass strict property mismatch errors during the merge
const similarHotels = [...uniqueProperties, ...guestFavorites]
  .filter((h: any) => {
    const currentIdentifier = h.hotelId || h.id.toString();
    return currentIdentifier !== hotelId;
  })
  .slice(0, 4);

// 4. Gallery (Ensuring it uses the found hotel's image)
const galleryImages = Array(5).fill(hotel.imageUrl);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-medium text-zinc-500">
            <span>Hotels</span> <ChevronRight className="w-4 h-4" />
            <span>{hotel.place}</span> <ChevronRight className="w-4 h-4" />
            <span className="text-zinc-900 dark:text-white truncate max-w-[150px]">
              {hotel.name}
            </span>
          </div>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-full font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 dark:shadow-none">
            Book Now
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <HotelGallery images={galleryImages} hotelName={hotel.name} />

        <div className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-4 bg-orange-50 dark:bg-orange-950/20 p-4 rounded-2xl border border-orange-100 dark:border-orange-900/50">
            <div className="bg-orange-500 p-2 rounded-full">
              <Clock className="w-5 h-5 text-white animate-pulse" />
            </div>
            <div>
              <p className="text-sm font-bold text-orange-900 dark:text-orange-200">
                High Demand
              </p>
              <p className="text-xs text-orange-700 dark:text-orange-300">
                Last booked 2 hours ago for these dates.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-emerald-50 dark:bg-emerald-950/20 p-4 rounded-2xl border border-emerald-100 dark:border-emerald-900/50">
            <div className="bg-emerald-500 p-2 rounded-full">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-bold text-emerald-900 dark:text-emerald-200">
                Price Match Guarantee
              </p>
              <p className="text-xs text-emerald-700 dark:text-emerald-300">
                Found it cheaper? We'll match the price.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-blue-50 dark:bg-blue-950/20 p-4 rounded-2xl border border-blue-100 dark:border-blue-900/50">
            <div className="bg-blue-500 p-2 rounded-full">
              <CreditCard className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-bold text-blue-900 dark:text-blue-200">
                Flexible Booking
              </p>
              <p className="text-xs text-blue-700 dark:text-blue-300">
                No prepayment needed at most rooms.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-16">
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-lg text-sm font-medium border border-green-100 dark:border-green-800">
                <ShieldCheck className="w-4 h-4" /> 100% Sanitized Stay
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-lg text-sm font-medium border border-blue-100 dark:border-blue-800">
                <Leaf className="w-4 h-4" /> Travel Sustainable Level 3
              </div>
            </div>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                Experience {hotel.name}
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed italic">
                "{hotel.description}"
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Property Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {hotel.facilities?.map((facility) => {
                  const Icon = amenityIcons[facility] || Wifi;
                  return (
                    <div
                      key={facility}
                      className="flex items-center gap-3 p-4 border border-zinc-100 dark:border-zinc-800 rounded-xl hover:bg-white dark:hover:bg-zinc-800 transition shadow-sm"
                    >
                      <Icon className="w-5 h-5 text-indigo-500" />
                      <span className="text-sm font-medium">{facility}</span>
                    </div>
                  );
                })}
              </div>
            </section>

            <section id="rooms" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-6">Choose your room</h2>
              <div className="space-y-4">
                {hotel.roomTypes?.map((room, idx) => (
                  <div
                    key={idx}
                    className="border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 hover:border-indigo-500 transition-colors"
                  >
                    <div className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div className="flex-1">
                        {room.savings && (
                          <span className="text-[10px] bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-0.5 rounded font-bold uppercase mb-2 inline-block">
                            {room.savings}
                          </span>
                        )}
                        <h3 className="font-bold text-lg">{room.name}</h3>
                        <p className="text-sm text-zinc-500 mb-3">
                          {room.specs}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {room.features.map((f) => (
                            <span
                              key={f}
                              className="text-[11px] bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-zinc-600 dark:text-zinc-400 flex items-center gap-1"
                            >
                              <Check className="w-3 h-3 text-indigo-500" /> {f}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="text-right w-full md:w-auto border-t md:border-t-0 pt-4 md:pt-0">
                        <p className="text-xs text-zinc-400 line-through">
                          {hotel.fakePrice}
                        </p>
                        <p className="text-2xl font-bold text-indigo-600">
                          {room.price}
                        </p>
                        <button className="mt-2 w-full md:w-auto bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-4 py-2 rounded-lg font-bold text-sm hover:bg-indigo-600 hover:text-white transition">
                          Select
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="reviews" className="scroll-mt-24">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold">Guest reviews</h2>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="bg-indigo-600 text-white px-3 py-1 rounded-lg font-bold">
                      {hotel.reviewPoint}
                    </span>
                    <span className="font-semibold text-lg">
                      {hotel.review}
                    </span>
                    <span className="text-zinc-500">
                      • {hotel.totalReviews} verified reviews
                    </span>
                  </div>
                </div>
                <button className="text-indigo-600 font-bold hover:underline">
                  Read all reviews
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mb-10">
                {[
                  { label: "Cleanliness", score: 9.2 },
                  { label: "Location", score: 9.8 },
                  { label: "Staff", score: 8.9 },
                  { label: "Comfort", score: 9.4 },
                  { label: "Value for money", score: 8.5 },
                  { label: "Facilities", score: 9.0 },
                ].map((item) => (
                  <div key={item.label} className="space-y-1">
                    <div className="flex justify-between text-sm font-medium">
                      <span>{item.label}</span>
                      <span>{item.score}</span>
                    </div>
                    <div className="h-1.5 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-indigo-500 rounded-full"
                        style={{ width: `${item.score * 10}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    className="p-6 border border-zinc-100 dark:border-zinc-800 rounded-2xl bg-zinc-50/50 dark:bg-zinc-900/50"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center font-bold text-indigo-600">
                        JD
                      </div>
                      <div>
                        <p className="font-bold text-sm">John Doe</p>
                        <p className="text-xs text-zinc-500">
                          Stayed in Oct 2023 • Couple
                        </p>
                      </div>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-4 italic">
                      "The view from the balcony was absolutely breathtaking.
                      The staff went above and beyond to make our anniversary
                      special. Highly recommend the spa treatment!"
                    </p>
                    <div className="flex items-center gap-4 text-xs font-bold text-green-600">
                      <span className="flex items-center gap-1">
                        <ThumbsUp className="w-3 h-3" /> Helpful
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ Section */}
            <section
              id="faq"
              className="scroll-mt-24 bg-zinc-50 dark:bg-zinc-900/30 p-8 rounded-3xl"
            >
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-indigo-600" /> Frequently
                Asked Questions
              </h2>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                {hotel.faqs?.map((faq, i) => (
                  <div key={i}>
                    <p className="font-bold mb-2 text-zinc-900 dark:text-white">
                      {faq.q}
                    </p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section id="location" className="scroll-mt-24">
              <section className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Location Highlights</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {hotel.locationHighlights?.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-100 dark:border-zinc-800"
                    >
                      <div className="flex items-center gap-3">
                        <MapPin className="w-4 h-4 text-indigo-500" />
                        <div>
                          <p className="font-medium text-sm">{item.name}</p>
                          <p className="text-xs text-zinc-500">{item.type}</p>
                        </div>
                      </div>
                      <span className="text-sm font-semibold text-zinc-400">
                        {item.distance}
                      </span>
                    </div>
                  ))}
                  {!hotel.locationHighlights && (
                    <p className="text-zinc-500 italic">
                      Local landmark data coming soon.
                    </p>
                  )}
                </div>
                <div className="aspect-video bg-zinc-100 dark:bg-zinc-900 rounded-3xl relative overflow-hidden group border border-zinc-200 dark:border-zinc-800">
                  <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 z-10">
                    <div className="w-12 h-12 bg-white dark:bg-zinc-800 rounded-full flex items-center justify-center shadow-xl">
                      <Map className="text-indigo-600" />
                    </div>
                    <button className="bg-white dark:bg-zinc-800 px-4 py-2 rounded-full text-sm font-bold shadow-md hover:bg-zinc-50 transition">
                      View on Map
                    </button>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000"
                    className="w-full h-full object-cover opacity-50 grayscale"
                    alt="Map preview"
                  />
                </div>
              </section>
            </section>

            {/* Property Policies Section */}
            <section className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-3xl">
              <h2 className="text-2xl font-bold mb-8">
                Property Policies & Rules
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <Clock className="w-6 h-6 text-indigo-500 shrink-0" />
                    <div>
                      <p className="font-bold">Check-in / Check-out</p>
                      <p className="text-sm text-zinc-500 leading-relaxed">
                        Check-in: 3:00 PM - Midnight
                        <br />
                        Check-out: 12:00 PM
                        <br />
                        Express check-in available via app.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <ShieldCheck className="w-6 h-6 text-emerald-500 shrink-0" />
                    <div>
                      <p className="font-bold">Damage Deposit</p>
                      <p className="text-sm text-zinc-500 leading-relaxed">
                        A refundable security deposit of ₹5,000 is required upon
                        arrival for incidentals.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <Users className="w-6 h-6 text-blue-500 shrink-0" />
                    <div>
                      <p className="font-bold">Children & Extra Beds</p>
                      <p className="text-sm text-zinc-500 leading-relaxed">
                        Children of all ages are welcome. Kids under 12 stay
                        free using existing bedding.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <Ban className="w-6 h-6 text-red-500 shrink-0" />
                    <div>
                      <p className="font-bold">Smoking & Parties</p>
                      <p className="text-sm text-zinc-500 leading-relaxed">
                        Strictly no smoking inside rooms. No parties or events
                        allowed. Quiet hours: 10PM - 8AM.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <CreditCard className="w-6 h-6 text-zinc-500 shrink-0" />
                    <div>
                      <p className="font-bold">Accepted Payments</p>
                      <p className="text-sm text-zinc-500 mb-2">
                        The property accepts Visa, Mastercard, AMEX, and UPI.
                      </p>
                      <div className="flex gap-2">
                        <div className="h-5 w-8 bg-zinc-100 dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700" />
                        <div className="h-5 w-8 bg-zinc-100 dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700" />
                        <div className="h-5 w-8 bg-zinc-100 dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

             <SimilarHotels hotel={hotel}/>
          </div>

          <div className="lg:relative">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-3xl shadow-2xl shadow-zinc-200/50 dark:shadow-none">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <span className="text-3xl font-bold">{hotel.price}</span>
                    <span className="text-zinc-500 text-sm ml-1">/ night</span>
                  </div>
                  <div className="text-right">
                    <div className="bg-indigo-600 text-white px-2 py-1 rounded-lg text-sm font-bold inline-block">
                      {hotel.reviewPoint}
                    </div>
                    <p className="text-xs font-bold mt-1 uppercase text-zinc-400">
                      {hotel.review}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 border border-zinc-200 dark:border-zinc-700 rounded-xl overflow-hidden mb-6">
                  <div className="p-3 border-r border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 cursor-pointer">
                    <p className="text-[10px] uppercase font-bold text-zinc-400">
                      Check-In
                    </p>
                    <p className="text-sm font-medium">Add date</p>
                  </div>
                  <div className="p-3 hover:bg-zinc-50 dark:hover:bg-zinc-800 cursor-pointer">
                    <p className="text-[10px] uppercase font-bold text-zinc-400">
                      Check-Out
                    </p>
                    <p className="text-sm font-medium">Add date</p>
                  </div>
                </div>
                <button className="w-full bg-indigo-600 py-4 rounded-xl text-white font-bold text-lg hover:bg-indigo-700 transition-transform active:scale-95 shadow-lg shadow-indigo-200 dark:shadow-none">
                  Reserve Now
                </button>
                <p className="text-center text-xs text-zinc-400 mt-4">
                  You won't be charged yet
                </p>
              </div>

              <div className="bg-zinc-100 dark:bg-zinc-900 p-6 rounded-2xl">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <Clock className="w-4 h-4" /> Important Info
                </h4>
                <ul className="text-sm space-y-3 text-zinc-600 dark:text-zinc-400">
                  <li className="flex justify-between">
                    <span>Check-in</span> <b>15:00</b>
                  </li>
                  <li className="flex justify-between">
                    <span>Check-out</span> <b>12:00</b>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 p-4 z-50 flex justify-between items-center">
        <div>
          <p className="text-lg font-extrabold">{hotel.price}</p>
          <p className="text-xs text-indigo-600 font-bold">Free Cancellation</p>
        </div>
        <button className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg">
          Check Availability
        </button>
      </div>

      <footer className="bg-zinc-50 dark:bg-zinc-900/50 border-t border-zinc-200 dark:border-zinc-800 mt-20 py-12 pb-32 lg:pb-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex items-center gap-4">
            <ShieldCheck className="w-10 h-10 text-indigo-600" />
            <div>
              <h5 className="font-bold">Secure Booking</h5>
              <p className="text-xs text-zinc-500">
                Your data is always protected.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <MessageSquare className="w-10 h-10 text-indigo-600" />
            <div>
              <h5 className="font-bold">24/7 Support</h5>
              <p className="text-xs text-zinc-500">
                We're here to help anytime.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Check className="w-10 h-10 text-indigo-600" />
            <div>
              <h5 className="font-bold">Price Match</h5>
              <p className="text-xs text-zinc-500">Best price guaranteed.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
