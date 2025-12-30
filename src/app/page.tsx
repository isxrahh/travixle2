"use client";
import { useState } from "react";
import { Loader2 } from "lucide-react";

import HeroCarousel from "@/components/HeroCarousel";
import Navbar from "@/components/Navbar";
import MiniForm from "@/components/MiniForm";
import SensorySearch from "@/components/SensorySearch";
import HotelResultCard from "@/components/HotelResultCard";
import OffersCard from "@/components/OffersCard";
import MainSection from "@/components/MainSection";
import TripPlanner from "@/components/TripPlanner";
import WonderIndia from "@/components/WonderIndia";
import TrendingCities from "@/components/TrendingCities";
import PropertyType from "@/components/PropertyType";
import MidSection from "@/components/MidSection";
import EndSection from "@/components/EndSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [results, setResults] = useState<any[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleVibeSearch = async (vibe: number, focus: number) => {
    setIsGenerating(true);
    setResults([]);

    try {
      const response = await fetch("/api/search/vibe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ vibe, focus }),
      });

      if (!response.ok) throw new Error("Search failed");

      const data = await response.json();

      const hotelsFound = data.properties || data.hotels || [];
      setResults(hotelsFound);
    } catch (error) {
      console.error("Vibe Search Error:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <main className="bg-zinc-50 min-h-screen">
      <HeroCarousel />
      <Navbar />
      <MiniForm />

      <SensorySearch onGenerate={handleVibeSearch} loading={isGenerating} />

      <div className="max-w-7xl mx-auto px-6 pb-24 min-h-[200px]">
        {isGenerating ? (
          <div className="flex flex-col items-center py-20 animate-pulse">
            <Loader2 className="animate-spin text-indigo-600 mb-4" size={40} />
            <h2 className="text-xl font-bold text-zinc-900 uppercase tracking-widest">
              Curating your frequency...
            </h2>
          </div>
        ) : results.length > 0 ? (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-10 duration-700">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px bg-zinc-200 flex-1" />
              <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">
                AI Handpicked for your vibe
              </span>
              <div className="h-px bg-zinc-200 flex-1" />
            </div>

            <div className="grid grid-cols-1 gap-8">
              {results.map((hotel, index) => (
                <HotelResultCard
                  key={hotel.property_token || index}
                  hotel={hotel}
                />
              ))}
            </div>
          </div>
        ) : null}
      </div>

      <div className="h-32" />
      <OffersCard />
      <MainSection />
      <TripPlanner />
      <WonderIndia />
      <TrendingCities />
      <PropertyType />
      <MidSection />
      <EndSection />
      <Footer />
    </main>
  );
}
