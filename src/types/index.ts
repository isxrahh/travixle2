export interface RoomType {
  name: string;
  specs: string;
  features: string[];
  price: string;
  savings: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface HotelPolicies {
  checkIn: string;
  checkOut: string;
  cancellation: string;
  notes: string;
}

export interface WeekendDeals extends UniqueProperty {
  hotelId: string;
  roomTypes: RoomType[];
  faqs: FAQ[];
  locationHighlights: LocationHighlight[];
}

export interface guestFavourites extends UniqueProperty {
  hotelId: string;
  roomTypes: RoomType[];
  faqs: FAQ[];
  locationHighlights: LocationHighlight[];
}
export interface UniqueProperty {
  id: number;
  name: string;
  place: string;
  description: string;
  imageUrl: string;
  review: string;
  reviewPoint: string;
  totalReviews: string;
  // Add these to match WeekendDeals
  price?: string; 
  fakePrice?: string;
  facilities?: string[];
  roomTypes?: RoomType[];
  faqs?: FAQ[];
  policies?: HotelPolicies;
  locationHighlights?: LocationHighlight[]; // <--- Add this line
}
export interface LocationHighlight {
  name: string;
  distance: string;
  type: string;
}

export interface WeekendDeals {
  id: number;
  hotelId: string;
  name: string;
  place: string;
  description: string;
  imageUrl: string;
  price: string;
  fakePrice: string;
  review: string;
  reviewPoint: string;
  totalReviews: string;
  facilities: string[];
  roomTypes: RoomType[];
  faqs: FAQ[];
  policies: HotelPolicies;
  // Use the name of the interface followed by [] because it's a list
  locationHighlights: LocationHighlight[]; 
}