"use client";

import React, { useState } from "react";

const MY_TRIPS = [
  {
    id: 1,
    hotel: "Aman Tokyo",
    location: "Otemachi Tower, Tokyo",
    dates: "Oct 14 — Oct 19, 2025",
    price: "$4,250",
    status: "Upcoming",
    bookingRef: "TRP-882190",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    hotel: "1 Hotel Hanalei Bay",
    location: "Kauai, Hawaii",
    dates: "Jun 02 — Jun 10, 2025",
    price: "$6,100",
    status: "Completed",
    bookingRef: "TRP-112004",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800",
  }
];

export default function MyTripsPage() {
  const [activeTab, setActiveTab] = useState("Upcoming");

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#050505] text-slate-900 dark:text-slate-100 selection:bg-indigo-100">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 mb-4">
              <span>Account</span>
              <span className="text-slate-300">/</span>
              <span className="text-slate-400">Manage</span>
            </nav>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight italic">
              My <span className="text-indigo-600">Trips.</span>
            </h1>
          </div>
          
          {/* Tab Navigation - Capsule Style */}
          <div className="inline-flex bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 p-1 rounded-2xl shadow-sm">
            {["Upcoming", "Past", "Saved"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                  activeTab === tab 
                    ? "bg-slate-900 dark:bg-white text-white dark:text-black shadow-lg" 
                    : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Trips Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content: Trip Cards */}
          <div className="lg:col-span-8 space-y-8">
            {MY_TRIPS.filter(t => activeTab === "Upcoming" ? t.status === "Upcoming" : t.status !== "Upcoming").map((trip) => (
              <div key={trip.id} className="group relative bg-white dark:bg-zinc-900 rounded-[32px] border border-slate-200 dark:border-zinc-800 p-2 pr-8 flex flex-col md:flex-row items-center gap-8 transition-all hover:shadow-2xl hover:border-indigo-200 dark:hover:border-indigo-900">
                
                {/* Image Section */}
                <div className="w-full md:w-64 h-64 shrink-0 overflow-hidden rounded-[26px]">
                  <img 
                    src={trip.image} 
                    alt={trip.hotel} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                </div>

                {/* Info Section */}
                <div className="flex-1 py-4">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-widest rounded-full">
                      Confirmed
                    </span>
                    <span className="text-xs font-mono text-slate-400">{trip.bookingRef}</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-1 group-hover:text-indigo-600 transition-colors">
                    {trip.hotel}
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 font-medium mb-6">
                    {trip.location}
                  </p>

                  <div className="flex flex-wrap gap-10">
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-400 tracking-tighter mb-1">Check-in / Check-out</p>
                      <p className="text-sm font-bold">{trip.dates}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-400 tracking-tighter mb-1">Total Amount</p>
                      <p className="text-sm font-bold text-indigo-600">{trip.price}</p>
                    </div>
                  </div>
                </div>

                {/* Action Arrow */}
                <div className="hidden md:flex h-12 w-12 rounded-full border border-slate-100 dark:border-zinc-800 items-center justify-center group-hover:bg-slate-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar Area: Quick Insights */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-indigo-600 rounded-[32px] p-8 text-white shadow-xl shadow-indigo-200 dark:shadow-none">
              <p className="text-indigo-200 text-xs font-bold uppercase tracking-widest mb-2">Member Rewards</p>
              <h3 className="text-3xl font-bold mb-6 italic">You have 12,450 points.</h3>
              <button className="w-full py-4 bg-white text-indigo-600 rounded-2xl text-sm font-black hover:bg-indigo-50 transition-colors">
                Redeem for Stays
              </button>
            </div>

            <div className="bg-white dark:bg-zinc-900 rounded-[32px] p-8 border border-slate-200 dark:border-zinc-800">
              <h4 className="font-bold mb-6">Travel Resources</h4>
              <ul className="space-y-4">
                {['Digital Boarding Pass', 'Hotel Check-in Policy', 'Insurance Details'].map(item => (
                  <li key={item} className="flex items-center justify-between group cursor-pointer">
                    <span className="text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-indigo-600 transition-colors">{item}</span>
                    <svg className="w-4 h-4 text-slate-300 group-hover:text-indigo-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}