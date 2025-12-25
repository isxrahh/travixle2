"use client";

import HeroCarousel from "@/components/HeroCarousel";
import MiniForm from "@/components/MiniForm";
import OffersCard from "@/components/OffersCard";
import MainSection from "@/components/MainSection";
import Navbar from "@/components/Navbar";
import TripPlanner from "@/components/TripPlanner";
import WonderIndia from "@/components/WonderIndia";
import TrendingCities from "@/components/TrendingCities";
import PropertyType from "@/components/PropertyType";
import MidSection from "@/components/MidSection";
import EndSection from "@/components/EndSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <HeroCarousel/>
      <Navbar/>
      <MiniForm />

      <div className="h-32" />

      <OffersCard />
      <MainSection />
      <TripPlanner />
      <WonderIndia />
      <TrendingCities />
      <PropertyType />
      <MidSection/>
      <EndSection />
      <Footer />
    </main>
  );
}