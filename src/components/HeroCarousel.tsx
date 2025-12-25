"use client"

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const slides = [
  {
    title: "Plan Your Perfect Trip With AI",
    desc: "Smart itineraries, real-time tracking, collaborative planning — all in one place",
    image: "/assets/hero-image-1.jpg",
  },
  {
    title: "AI-Powered Itineraries",
    desc: "Personalized travel plans generated instantly for your preferences",
    image: "/assets/hero-image-2.jpg",
  },
  {
    title: "Real-Time Travel Tracking",
    desc: "Monitor bookings, delays, weather, and routes live",
    image: "/assets/hero-image-3.jpg",
  },
  {
    title: "Collaborate With Friends",
    desc: "Plan together, vote on places, and sync schedules",
    image: "/assets/hero-image-4.jpg",
  },
  {
    title: "One App. Every Journey.",
    desc: "From planning to return — we handle it all",
    image: "/assets/hero-image-5.jpg",
  },
];

export default function HeroCarousel() {
  return (
    <section className="relative w-full overflow-hidden">
      <Carousel 
      className="w-full"
      opts={{
        loop:true,
      }}
      plugins={[
        Autoplay({
          delay:3000,
          stopOnInteraction:false,
        }),
      ]}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              {/* Slide background */}
              <div
                className="relative h-[85vh] flex items-center justify-center
                bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                style={{
                  backgroundImage:`url(${slide.image})`,
                  backgroundSize:"cover",
                  backgroundPosition:"center",
                }}
              >
                {/* Overlay content */}
                <div className="absolute inset-0 bg-black/50" />

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                  <h1 className="text-5xl font-bold mb-4 animate-fade-in">
                    {slide.title}
                  </h1>
                  <p className="text-xl opacity-90">{slide.desc}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-6 bg-white/20 hover:bg-white/40 text-white" />
        <CarouselNext className="right-6 bg-white/20 hover:bg-white/40 text-white" />
      </Carousel>
    </section>
  );
}
