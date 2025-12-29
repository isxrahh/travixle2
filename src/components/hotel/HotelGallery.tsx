"use client";

import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Grid } from 'lucide-react';

export default function HotelGallery({ images, hotelName }: { images: string[], hotelName: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  const openGallery = (index: number) => {
    setCurrentIdx(index);
    setIsOpen(true);
  };

  return (
    <div className="mb-8">
      <div className="grid grid-cols-4 grid-rows-2 gap-3 h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl">
        <div className="col-span-2 row-span-2 relative group cursor-pointer" onClick={() => openGallery(0)}>
          <img src={images[0]} alt={hotelName} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />
        </div>
        
        {images.slice(1, 5).map((img, i) => (
          <div 
            key={i} 
            className="relative group cursor-pointer overflow-hidden" 
            onClick={() => openGallery(i + 1)}
          >
            <img src={img} alt={`${hotelName} ${i}`} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
            
            {i === 3 && (
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white border-none">
                <Grid className="w-6 h-6 mb-2" />
                <span className="font-bold text-sm">View all {images.length} photos</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col animate-in fade-in duration-300">
          <div className="p-6 flex justify-between items-center text-white">
            <span className="font-medium tracking-widest">{currentIdx + 1} / {images.length}</span>
            <button 
              onClick={() => setIsOpen(false)} 
              className="p-3 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
          </div>
          
          <div className="flex-1 flex items-center justify-between px-4 md:px-12 select-none">
            <button 
              onClick={() => setCurrentIdx(prev => (prev > 0 ? prev - 1 : images.length - 1))}
              className="p-4 bg-white/5 hover:bg-white/10 rounded-full text-white transition"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <div className="relative w-full max-w-5xl h-[70vh] flex items-center justify-center">
                <img 
                  src={images[currentIdx]} 
                  className="max-h-full max-w-full object-contain shadow-2xl rounded-lg" 
                  alt="Gallery"
                />
            </div>

            <button 
              onClick={() => setCurrentIdx(prev => (prev < images.length - 1 ? prev + 1 : 0))}
              className="p-4 bg-white/5 hover:bg-white/10 rounded-full text-white transition"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}