"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

interface HotelModalContextType {
  hotelId: string | null;
  openHotelDetails: (id: string) => void;
  closeHotelDetails: () => void;
}

const HotelModalContext = createContext<HotelModalContextType | undefined>(undefined);

export function HotelModalProvider({ children }: { children: ReactNode }) {
  const [hotelId, setHotelId] = useState<string | null>(null);

  const openHotelDetails = (id: string) => setHotelId(id);
  const closeHotelDetails = () => setHotelId(null);

  return (
    <HotelModalContext.Provider value={{ hotelId, openHotelDetails, closeHotelDetails }}>
      {children}
    </HotelModalContext.Provider>
  );
}

export function useHotelModal() {
  const context = useContext(HotelModalContext);
  if (!context) throw new Error('useHotelModal must be used within HotelModalProvider');
  return context;
}