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

import { auth } from "./auth/[...nextauth]/route";

import Link  from "next/link";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const session = await auth();

  return (
    <>
      <main>
        <HeroCarousel />
        <Navbar />

        {session ? (
            <div className="space-y-4">
              <p className="text-2xl text-gray-800">
                Hello, <span className="font-bold text-blue-600">{(session as any).user?.name || (session as any).user?.email}</span>! 👋
              </p>
              <p className="text-lg text-gray-600">
                Genius Level: <span className="font-bold text-blue-600">{(session as any).user?.geniusLevel || 0}</span>
              </p>
              <Link href="/dashboard">
                <Button size="lg" className="text-lg px-8 py-6">
                  Go to Dashboard
                </Button>
              </Link>
            </div>
          ) : (
            <div className="space-x-4">
              <Link href="/auth/signin">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Sign In
                </Button>
              </Link>
              <Link href="/auth/register">
                <Button size="lg" className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700">
                  Register for Free
                </Button>
              </Link>
            </div>
          )}
      </main>


      <MiniForm />

      <div className="h-32" />

      <OffersCard />
      <MainSection />
      <TripPlanner/>
      <WonderIndia/>
      <TrendingCities/>
      <PropertyType/>
      <MidSection/>
      <EndSection/>
      <Footer/>
    </>
  );
}
