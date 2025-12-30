import {
    Hotel,
    Home,
    Plane,
    Train,
    Bus,
    Car,
    Ship,
    Globe,
    Shield,
    Calendar,
    MapPin,
    Landmark,
    DollarSign,
} from "lucide-react";

export const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/hotels", label: "Hotels", icon: Hotel },
    { href: "/stays", label: "Stays", icon: Home },
    { href: "/flights", label: "Flights", icon: Plane, highlight: true }, // optional highlight
    { href: "/homestays", label: "Homestays & Villas", icon: Landmark },
    { href: "/packages", label: "Holiday Packages", icon: Calendar },
    { href: "/trains", label: "Trains", icon: Train },
    { href: "/buses", label: "Buses", icon: Bus },
    { href: "/cabs", label: "Cabs", icon: Car },
    {
        href: "/tours",
        label: "Tours & Attractions",
        icon: MapPin,
        badge: "new",
    },
    { href: "/visa", label: "Visa", icon: Globe },
    {
        href: "/cruise",
        label: "Cruise",
        icon: Ship,
        badge: "new",
    },
    { href: "/forex", label: "Forex Card & Currency", icon: DollarSign, badge: "new", },
    { href: "/insurance", label: "Travel Insurance", icon: Shield },
];

export const offers = [
    {
        id: 1,
        title: "Flat 20% OFF on Domestic Flights",
        code: "FLYHIGH",
        description: "Use code on bookings above ₹5000",
        badge: "20% OFF",
        category: "Flights",
        imageUrl: "./assets/flights-1.jpg",
    },
    {
        id: 2,
        title: "Up to ₹10,000 OFF on International Flights",
        code: "WORLD2025",
        description: "Valid on Emirates, Qatar & more",
        badge: "₹10K OFF",
        category: "Flights",
        imageUrl: "./assets/flights-2.jpg",
    },
    {
        id: 3,
        title: "Extra 15% OFF on Hotels",
        code: "STAYMORE",
        description: "For bookings with 3+ nights",
        badge: "15% OFF",
        category: "Hotels",
        imageUrl: "./assets/hotels-1.jpg",

    },
    {
        id: 4,
        title: "Zero Convenience Fee on Trains",
        code: "NOFEE",
        description: "Limited period offer",
        badge: "ZERO FEE",
        category: "Trains",
        imageUrl: "./assets/trains-1.jpg",

    },
    {
        id: 5,
        title: "₹2000 Cashback on Holiday Packages",
        code: "DREAMTRIP",
        description: "Min booking ₹20,000",
        badge: "₹2K BACK",
        category: "Packages",
        imageUrl: "./assets/package.jpg",

    },

    {
        id: 6,
        badge: "ZERO FEE",
        title: "Train Bookings",
        description: "No convenience fee this season",
        code: "NOFEE",
        category: "Trains",
        imageUrl: "./assets/trains-2.jpg",

    },
    {
        id: 7,
        badge: "UP TO ₹1000 OFF",
        title: "Outstation Cabs",
        description: "One-way & round trip rides",
        code: "CABS1000",
        category: "Cabs",
        imageUrl: "./assets/cabs.jpg",

    },
    {
        id: 8,
        badge: "FLAT 12% OFF",
        title: "Tours & Activities",
        description: "Things to do worldwide • Code: WELCOME",
        code: "WELCOME",
        category: "Activities",
        imageUrl: "./assets/activities.jpg",

    },
    {
        id: 9,
        badge: "UP TO 55% OFF",
        title: "Plush Stays for Christmas & New Year",
        description: "Luxury hotels with festive deals",
        code: "LUXE55",
        category: "Hotels",
        imageUrl: "./assets/hotels-2.jpg",

    },
    {
        id: 10,
        badge: "FLAT 15% OFF",
        title: "Private Villas & Homestays",
        description: "Cozy stays with extra savings",
        code: "STAY15",
        category: "Stays",
        imageUrl: "./assets/stays.jpg",

    },
];

export const viewtabs = [
    { label: "All Offers", active: true },
    { label: "Bank Offers" },
    { label: "Flights" },
    { label: "Hotels" },
    { label: "Holidays" },
    { label: "Trains" },
    { label: "Cabs" },
    { label: "Bus" },
    { label: "Forex" },
    { label: "MORE", hasChevron: true },
]

export const airlines = [
    {
        id: 1,
        name: "AirAsia",
        imageUrl: "./assets/airasia.png",
    },
    {
        id: 2,
        name: "Indigo",
        imageUrl: "./assets/indigo.png",
    },
    {
        id: 3,
        name: "Singapore Airlines",
        imageUrl: "./assets/singaporeairlines.png",
    },
]

export const hotels = [
    {
        id: 1,
        title: "ITC Sonar",
        imageUrl: "./assets/itc_sonar.png",
    },
    {
        id: 2,
        title: "JW Marriott Hotel",
        imageUrl: "./assets/jw_marriott.jpg",
    },
    {
        id: 3,
        title: "Hyatt Regency",
        imageUrl: "./assets/hyatt_regency.jpg",
    },
    {
        id: 4,
        title: "Taj Palace",
        imageUrl: "./assets/taj_palace.jpg",
    },
]

export const destinations = [
    {
        id: 1,
        name: "Amritsar, India",
        description: "Home to the shimmering Golden Temple, where spiritual hymns and selfless service create a divine, peaceful atmosphere.",
        imageUrl: "../assets/amritsar.jpg",
        badge: "TOP 5",
    }, {
        id: 2,
        name: "Amber Fort, Jaipur",
        description: "A majestic sandstone citadel overlooking Maota Lake, blending Rajput bravery with intricate Mughal-style aesthetic beauty.",
        imageUrl: "../assets/amber.webp",
        badge: "TOP 8",

    }, {
        id: 3,
        name: "Andaman, India",
        description: "A tropical paradise of turquoise waters and white sands, hiding vibrant coral reefs beneath the gentle waves.",
        imageUrl: "../assets/andaman.jpg",
        badge: "TOP 9",

    }, {
        id: 4,
        name: "Ajanta caves, Maharashtra",
        description: "These ancient rock-cut masterpieces house exquisite Buddhist frescoes that have survived the passage of centuries.",
        imageUrl: "../assets/caves.avif",
        badge: "TOP 12",

    }, {
        id: 5,
        name: "Great Wall of China",
        description: "An awe-inspiring stone dragon snaking across misty mountains, echoing the grandeur of ancient imperial defense.",
        imageUrl: "../assets/china.jpg",
        badge: "TOP 3",

    }, {
        id: 6,
        name: "Burj Khalifa, Dubai",
        description: "A shimmering silver needle piercing the clouds, representing the absolute pinnacle of modern architectural ambition.",
        imageUrl: "../assets/dubai.webp",
        badge: "TOP 4",

    }, {
        id: 7,
        name: "Pyramid Of Giza, Egypt",
        description: "The last standing ancient wonder, these silent limestone giants hold the eternal secrets of pharaohs.",
        imageUrl: "../assets/egypt.webp",
        badge: "TOP 10",

    }, {
        id: 8,
        name: "Taj Mahal, India",
        description: "A breathtaking symphony in white marble, this poetry in stone stands as a timeless testament to eternal love.",
        imageUrl: "../assets/india.webp",
        badge: "TOP 2",

    }, {
        id: 9,
        name: "Kerala",
        description: "Known as God’s Own Country, where emerald backwaters wind through swaying palms and lush, misty tea plantations.",
        imageUrl: "../assets/kerala.jpg",
        badge: "TOP 14",

    }, {
        id: 10,
        name: "Manali",
        description: "A snow-capped Himalayan sanctuary offering adrenaline-pumping adventures and serene cedar forests for the soul-seeking traveler.",
        imageUrl: "../assets/manali.jpg",
        badge: "TOP 7",

    }, {
        id: 11,
        name: "Statue of Liberty, New York",
        description: "A colossal copper guardian in New York Harbor, lighting the way with the torch of freedom.",
        imageUrl: "../assets/nyc.webp",
        badge: "TOP 15",

    }, {
        id: 12,
        name: "Eiffel Tower, Paris",
        description: "Paris’s iron heartbeat, offering a romantic silhouette that transforms into a sparkling gold lattice at night.",
        imageUrl: "../assets/paris.jpg",
        badge: "TOP 6",

    },
    {
        id: 13,
        name: "Qutub Minar, Delhi",
        description: "A towering fluted masterpiece of Indo-Islamic architecture, standing as a brick-red sentinel of Delhi’s rich history.",
        imageUrl: "../assets/qutub_minar.jpg",
        badge: "TOP 12",

    },
    {
        id: 14,
        name: "Sydney, Austrailia",
        description: "A vibrant harbor city where the sails of the Opera House meet world-class surfing at Bondi Beach.",
        imageUrl: "../assets/sydney.png",
        badge: "TOP 9",

    },
    {
        id: 15,
        name: "Udaipur, Rajasthan",
        description: "The City of Lakes, where marble palaces float on shimmering waters, reflecting the timeless romance of Rajasthan.",
        imageUrl: "../assets/udaipur.jpg",
        badge: "TOP 1",

    },
]

export const wonders = [
    {
        id: 1,
        name: "Tamil Nadu's Charming Hill Town",
        imageUrl: "../assets/tn.avif",
    },
    {
        id: 2,
        name: "Picturesque Gateway to Himalayas",
        imageUrl: "../assets/himalayas.avif",

    },
    {
        id: 3,
        name: "Quaint Little Hill Station in Gujarat",
        imageUrl: "../assets/gujarat.avif",

    },
    {
        id: 4,
        name: "A pleasant summer retreat and a snowy winter wonderland!",
        imageUrl: "../assets/wonderland.avif",

    },
    {
        id: 5,
        name: "Seaside Resort Village in West Bengal",
        imageUrl: "../assets/wb.avif",

    },
    {
        id: 6,
        name: "Hidden Gem along Maharashtra's Coast",
        imageUrl: "../assets/maharashtra.avif",

    },
    {
        id: 7,
        name: "Picture-Perfect Hill Station in Tamil Nadu",
        imageUrl: "../assets/tn-2.webp",

    },
    {
        id: 8,
        name: "Hill Retreat in Andhra Pradesh",
        imageUrl: "../assets/ap.avif",

    },
]

export const cities = [
    {
        id: 1,
        name: "New Delhi",
        imageUrl: "../assets/new_delhi.jpg"
    },
    {
        id: 2,
        name: "Mumbai",
        imageUrl: "../assets/mumbai.jpeg"
    },
    {
        id: 3,
        name: "Kolkata",
        imageUrl: "../assets/kolkata.avif"
    },
    {
        id: 4,
        name: "Bangalore",
        imageUrl: "../assets/bangalore.jpg"
    },
    {
        id: 5,
        name: "Hyderabad",
        imageUrl: "../assets/hyderabad.png"
    },
]

export const propertyTypes = [
    {
        id: 1,
        name: "Luxury Hotels",
        description: "5-star stays with premium amenities",
        searchType:"Hotels",
        imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
    },
    {
        id: 2,
        name: "Beach Resorts",
        description: "Oceanfront relaxation and water sports",
        searchType:"Resorts",
        imageUrl: "https://images.unsplash.com/photo-1598598795006-ea2174659eaa?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 3,
        name: "Boutique Stays",
        description: "Unique, stylish, and intimate experiences",
        searchType:"Villas",
        imageUrl: "https://images.unsplash.com/photo-1664189027407-a43a7295e01a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 4,
        name: "Villas & Apartments",
        description: "Private homes with kitchen and space",
        searchType:"Apartments",
        imageUrl: "https://plus.unsplash.com/premium_photo-1682377521697-bc598b52b08a?q=80&w=1215&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 5,
        name: "Homestays",
        description: "Live like a local with warm hospitality",
        searchType:"Apartments",
        imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
    },
    {
        id: 6,
        name: "Cabins",
        description: "Cozy wooden retreats in nature",
        searchType:"Cabins",
        imageUrl: "https://plus.unsplash.com/premium_photo-1686090449194-04ac2af9f758?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 7,
        name: "Cottages",
        description: "Charming countryside escapes for families",
        searchType:"Resort",
        imageUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
    },
    {
        id: 8,
        name: "Glamping Sites",
        description: "Luxury camping under the stars",
        searchType:"Resort",
        imageUrl: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
    },
    {
        id: 9,
        name: "Vacation Homes",
        description: "Spacious properties for group getaways",
        searchType:"Apartments",
        imageUrl: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
    },
    {
        id: 10,
        name: "Guest House",
        description: "Affordable comfort with personal touches",
        searchType:"Apartments",
        imageUrl: "https://images.unsplash.com/photo-1544124499-58912cbddaad?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
    },
    {
        id: 11,
        name: "Hostels",
        description: "Budget-friendly rooms for social travelers",
        searchType:"Apartments",
        imageUrl: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 12,
        name: "Motels",
        description: "Convenient roadside stops for motorists",
        searchType:"Hotels",
        imageUrl: "https://images.unsplash.com/photo-1625669709111-6df35affa0a5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 13,
        name: "B&Bs",
        description: "Quaint lodging with homemade breakfast",
        searchType:"B&Bs",
        imageUrl: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
    },
    {
        id: 14,
        name: "Ryokans",
        description: "Traditional Japanese inns with tatami",
        searchType:"Traditional",
        imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
    },
    {
        id: 15,
        name: "Riads",
        description: "Historic Moroccan homes with courtyards",
        searchType:"Traditional",
        imageUrl: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
    },
    {
        id: 16,
        name: "Resort Villages",
        description: "All-inclusive complexes with full recreation",
        searchType:"",
        imageUrl: "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
    },
];

export const weekendDeals = [
    {
        id: 1,
        hotelId: "emirates-palace",
        name: "Oriental Emirates Palace",
        place: "West Corniche Road, Abu Dhabi",
        description: "A legendary palace redefined as a contemporary icon. Set on a pristine private beach with lush gardens, this opulent resort offers Arabian hospitality at its finest.",
        price: "₹1,65,405",
        fakePrice: "₹1,75,905",
        review: "Exceptional",
        reviewPoint: "9.6",
        totalReviews: "3,240 reviews",
        imageUrl: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/6f/5f/6e.jpg",
        facilities: ["Private Beach", "Multiple Pools", "Award-Winning Spa", "8 Restaurants", "Butler Service"],
        roomTypes: [
            {
                name: "Coral Room",
                specs: "1 King Bed • Garden View",
                features: ["Private Balcony", "iPad Control"],
                price: "₹1,65,405",
                savings: "Best Value"
            }
        ],
        locationHighlights:
            [
                {
                    "name": "Qasr Al Watan",
                    "distance": "1.8 km",
                    "type": "Cultural Landmark / Presidential Palace"
                },
                {
                    "name": "Etihad Towers",
                    "distance": "760 m",
                    "type": "Observation Deck / Landmark"
                },
                {
                    "name": "Marina Mall",
                    "distance": "2.8 km",
                    "type": "Shopping Mall"
                },
                {
                    "name": "Heritage Village",
                    "distance": "3.5 km",
                    "type": "Cultural / Historical Site"
                }


            ],
        faqs: [
            { q: "Is there a dress code?", a: "Smart-casual is required in the lobby and restaurants." }
        ],
        policies: {
            checkIn: "3:00 PM",
            checkOut: "12:00 PM",
            cancellation: "Free cancellation 24h before.",
            notes: "Tourism Dirham fee applicable."
        }
    },
    {
        id: 2,
        hotelId: "signiel-seoul",
        name: "Signiel Seoul",
        place: "Lotte World Tower, Songpa-gu, Seoul",
        description: "Located on floors 76-101 of the world's 6th tallest building. Offers panoramic views of the Han River and Seoul skyline.",
        price: "₹32,938",
        fakePrice: "₹39,487",
        review: "Exceptional",
        reviewPoint: "9.5",
        totalReviews: "1,850 reviews",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/de/2b/08/caption.jpg?w=900&h=500&s=1",
        facilities: ["Sky-High Views", "Indoor Pool", "Michelin Restaurant", "Champagne Bar"],
        roomTypes: [
            {
                name: "Grand Deluxe Room",
                specs: "1 King Bed • High Floor",
                features: ["City View", "Diptyque Amenities"],
                price: "₹32,938",
                savings: ""
            }
        ],
        locationHighlights: [
            { name: "Lotte World Adventure", distance: "0.2 km", type: "Theme Park" },
            { name: "Seokchon Lake", distance: "0.4 km", type: "Park" },
            { name: "Olympic Park", distance: "2.1 km", type: "Nature" },
            { name: "Gangnam District", distance: "4.5 km", type: "Business" }
        ],
        faqs: [
            { q: "Is the gym 24/7?", a: "Yes, available for all guests on the 85th floor." }
        ],
        policies: {
            checkIn: "3:00 PM",
            checkOut: "11:00 AM",
            cancellation: "Free until 48h before arrival.",
            notes: "Pool closed last Monday of every month."
        }
    },
    {
        id: 3,
        hotelId: "itc-grand-chola",
        name: "ITC Grand Chola",
        place: "Guindy, Chennai, Tamil Nadu",
        description: "A palatial tribute to India's greatest dynasty. Inspired by Chola architecture, featuring grand halls and sustainable luxury.",
        price: "₹14,160",
        fakePrice: "₹20,226",
        review: "Superb",
        reviewPoint: "9.3",
        totalReviews: "12,100 reviews",
        imageUrl: "https://www.itchotels.com/content/dam/itchotels/in/umbrella/itc/hotels/itcgrandchola-chennai/images/overview/overview-desktop/exterior-dusk.png",
        facilities: ["Royal Architecture", "10 Restaurants", "Kaya Kalp Spa", "Free Parking"],
        roomTypes: [
            {
                name: "Executive Club Room",
                specs: "1 King Bed • 405 sq ft",
                features: ["Business Center Access", "Safe"],
                price: "₹14,160",
                savings: "Member Deal"
            }
        ],
        faqs: [
            { q: "Is breakfast included?", a: "Included in most rates at the Madras Pavilion." }
        ],
        locationHighlights: [
            { name: "Guindy National Park", distance: "1.1 km", type: "Nature" },
            { name: "Chennai Airport (MAA)", distance: "6.5 km", type: "Transit" },
            { name: "Marina Beach", distance: "9.0 km", type: "Beach" },
            { name: "Phoenix Marketcity", distance: "2.8 km", type: "Shopping" }
        ],
        policies: {
            checkIn: "2:00 PM",
            checkOut: "12:00 PM",
            cancellation: "Free until 6:00 PM on day of arrival.",
            notes: "Valid Photo ID required."
        }
    },
    {
        id: 4,
        hotelId: "badrutts-palace",
        name: "Badrutt's Palace Hotel",
        place: "Via Serlas 27, St. Moritz, Switzerland",
        description: "The legendary grande dame of the Alps since 1896. Overlooking Lake St. Moritz, offering timeless elegance and world-class skiing.",
        price: "₹2,50,876",
        fakePrice: "₹3,55,987",
        review: "Exceptional",
        reviewPoint: "9.4",
        totalReviews: "1,120 reviews",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/3b/f3/c8/badrutt-s-palace-hotel.jpg?w=900&h=500&s=1",
        facilities: ["Lake Views", "Ski-in Access", "Indoor Pool", "Gourmet Dining"],
        roomTypes: [
            {
                name: "Deluxe Single Room",
                specs: "1 Queen Bed • Mountain View",
                features: ["Heated Floor", "Ski Storage"],
                price: "₹2,50,876",
                savings: ""
            }
        ],
        faqs: [
            { q: "Do you offer ski rentals?", a: "Yes, our in-house ski boutique handles all equipment." }
        ],
        locationHighlights: [
            { name: "Lake St. Moritz", distance: "0.1 km", type: "Lake" },
            { name: "Corviglia Ski Lift", distance: "0.5 km", type: "Skiing" },
            { name: "Cresta Run", distance: "0.8 km", type: "Sports" },
            { name: "St. Moritz Train Station", distance: "0.4 km", type: "Transit" }
        ],
        policies: {
            checkIn: "3:00 PM",
            checkOut: "12:00 PM",
            cancellation: "Strict during winter peak seasons.",
            notes: "Pets welcome with prior notice."
        }
    }
];

export const uniqueProperties = [
    {
        id: 1,
        hotelId: "treehouse-in-kerala",
        name: "Treehouse in Kerala",
        place: "Munnar, Kerala, India",
        description: "Experience the magic of the Western Ghats from 40 feet above the ground. This sustainable bamboo structure offers panoramic views of tea plantations and frequent bird sightings.",
        imageUrl: "../assets/kerala.jpg",
        price: "₹12,500",
        fakePrice: "₹15,000",
        review: "Good",
        reviewPoint: "4.2",
        totalReviews: "2.1K",
        facilities: ["Free WiFi", "Gym", "Parking", "Butler Service"],
        locationHighlights: [
            { name: "Munnar Tea Gardens", distance: "500m", type: "Nature" },
            { name: "Eravikulam Park", distance: "8km", type: "Landmark" },
            { name: "Cochin Airport", distance: "110km", type: "Transport" }
        ],
        roomTypes: [
            {
                name: "Canopy Deluxe Suite",
                specs: "1 King Bed • 350 sq ft • Private Deck",
                features: ["Organic Toiletries", "Coffee Maker", "Mountain View"],
                price: "₹12,500",
                savings: "Early Bird Offer"
            },
            {
                name: "Family Banyan Nest",
                specs: "2 Queen Beds • 600 sq ft • Glass Floors",
                features: ["Mini Library", "Hammock", "Binoculars Provided"],
                price: "₹18,000",
                savings: ""
            }
        ],
        faqs: [
            { q: "Is it safe for children?", a: "Yes, all decks are secured with 4-foot high safety netting and solid bamboo railings." },
            { q: "How do we get our luggage up?", a: "We have a dedicated pulley system and staff to transport your bags safely to your room." }
        ],
        policies: {
            checkIn: "2:00 PM",
            checkOut: "11:00 AM",
            cancellation: "Flexible: Full refund 48 hours before arrival.",
            notes: "Strictly no smoking due to the bamboo structure."
        }
    },
    {
        id: 2,
        hotelId: "glass-igloo-in-manali",
        name: "Glass Igloo in Manali",
        place: "Sethan, Manali, India",
        description: "Sleep under the northern stars in a heated glass dome. Located in a restricted high-altitude zone, this igloo provides a 360-degree view of the snow-capped Himalayas.",
        imageUrl: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
        price: "₹22,000",
        fakePrice: "₹28,500",
        review: "Very Good",
        reviewPoint: "4.5",
        totalReviews: "42K",
        facilities: ["Indoor Pool", "Sauna", "Michelin Restaurant", "Free WiFi"],
        locationHighlights: [
            { name: "Sethan Valley", distance: "100m", type: "Nature" },
            { name: "Hampta Pass Trek", distance: "2km", type: "Activity" },
            { name: "Manali Mall Road", distance: "12km", type: "City Center" }
        ],
        roomTypes: [
            {
                name: "Aurora Glass Dome",
                specs: "1 Queen Bed • Heated Floors",
                features: ["Star-gazing App", "Remote Blinds", "Plush Robes"],
                price: "₹22,000",
                savings: "Most Popular"
            }
        ],
        faqs: [
            { q: "Does the glass fog up?", a: "No, we use specialized double-glazed anti-fog glass with integrated heating." },
            { q: "Is the road accessible in winter?", a: "We provide 4x4 transfers from Manali mall road included in your stay." }
        ],
        policies: {
            checkIn: "1:00 PM",
            checkOut: "10:00 AM",
            cancellation: "Non-refundable during peak snow season (Dec-Feb).",
            notes: "Heavy woolens recommended even inside the dome."
        }
    },
    {
        id: 3,
        hotelId: "aparthotel-stare-miasto",
        name: "Aparthotel Stare Miasto",
        place: "Old Town, Krakow, Poland",
        description: "Modern luxury meets medieval charm. Located in the heart of Krakow, these apartments feature exposed brick walls and high-end Italian furniture.",
        imageUrl: "../assets/house-3.webp",
        price: "₹9850",
        fakePrice: "₹12900",
        review: "Excellent",
        reviewPoint: "8.8",
        totalReviews: "3.2K",
        facilities: ["Free WiFi", "Parking", "Kitchenette", "Gym"],
        locationHighlights: [
            { name: "Main Market Square", distance: "200m", type: "Landmark" },
            { name: "Wawel Royal Castle", distance: "800m", type: "History" },
            { name: "Kraków Glowny Station", distance: "1.2km", type: "Transport" }
        ],
        roomTypes: [
            {
                name: "Studio Apartment",
                specs: "1 Double Bed • City View",
                features: ["Full Kitchen", "Smart TV", "Rain Shower"],
                price: "₹11000",
                savings: "Best Seller"
            },
            {
                name: "Royal Penthouse",
                specs: "2 Bedrooms • View of Wawel Castle",
                features: ["Washer/Dryer", "Dining Area", "Balcony"],
                price: "₹21000",
                savings: "Group Deal"
            }
        ],
        faqs: [
            { q: "Is there an elevator?", a: "Yes, the building is fully accessible with a modern elevator." },
            { q: "Is it noisy near the square?", a: "We use triple-paned soundproof windows to ensure a quiet night's sleep." }
        ],
        policies: {
            checkIn: "3:00 PM",
            checkOut: "11:00 AM",
            cancellation: "Free cancellation up to 7 days before check-in.",
            notes: "Quiet hours observed from 10:00 PM to 7:00 AM."
        }
    },
    {
        id: 4,
        hotelId: "7seasons-apartment-budapest",
        name: "7Seasons Apartment Budapest",
        place: "06. Terézváros, Budapest, Hungary",
        description: "Perfectly situated for exploring the city, these apartments offer the space of a home with the service of a 4-star hotel.",
        imageUrl: "../assets/house-4.webp",
        price: "₹8500",
        fakePrice: "₹10800",
        review: "Excellent",
        reviewPoint: "8.7",
        totalReviews: "10K",
        facilities: ["Free WiFi", "Kids Club", "Airport Shuttle", "8 Restaurants"],
        locationHighlights: [
            { name: "Deák Ferenc Square", distance: "150m", type: "Transport" },
            { name: "St. Stephen's Basilica", distance: "400m", type: "Landmark" },
            { name: "Opera House", distance: "600m", type: "Culture" }
        ],
        roomTypes: [
            {
                name: "Standard One-Bedroom",
                specs: "1 Queen Bed + Sofa Bed",
                features: ["Dishwasher", "Air Conditioning", "Safe"],
                price: "₹9500",
                savings: "Member Deal"
            }
        ],
        faqs: [
            { q: "Do you store luggage?", a: "Yes, we have a secure luggage room available 24/7 free of charge." }
        ],
        policies: {
            checkIn: "2:00 PM",
            checkOut: "11:00 AM",
            cancellation: "Flexible rates available.",
            notes: "Photo ID required for all guests at check-in."
        }
    },
    {
        id: 5,
        hotelId: "numa-florence-vita",
        name: "Numa Florence Vita",
        place: "Santa Maria Novella, Florence, Italy",
        description: "Sustainable luxury in a historic Florentine building. Featuring contactless check-in and curated local art in every suite.",
        imageUrl: "../assets/house-5.webp",
        price: "₹16100",
        fakePrice: "₹19700",
        review: "Excellent",
        reviewPoint: "8.9",
        totalReviews: "1.1K",
        facilities: ["Free WiFi", "Award-Winning Spa", "Butler Service", "Sauna"],
        locationHighlights: [
            { name: "Santa Maria Novella", distance: "300m", type: "Transport" },
            { name: "Duomo Cathedral", distance: "900m", type: "Landmark" },
            { name: "Uffizi Gallery", distance: "1.4km", type: "Art" }
        ],
        roomTypes: [
            {
                name: "Superior Suite",
                specs: "King Bed • High Ceilings",
                features: ["Sustainable Linens", "Yoga Mat", "Local Snacks"],
                price: "₹18000",
                savings: ""
            }
        ],
        faqs: [
            { q: "How does digital check-in work?", a: "You will receive a PIN code for the main entrance and your room via email 24 hours before arrival." }
        ],
        policies: {
            checkIn: "3:00 PM",
            checkOut: "11:00 AM",
            cancellation: "Non-refundable rates are 10% cheaper.",
            notes: "100% smoke-free property."
        }
    },
    {
        id: 6,
        hotelId: "leman-locke",
        name: "Leman Locke",
        place: "Tower Hamlets, London, UK",
        description: "A design-led hotel for those who want to experience the local lifestyle. Soft pink interiors and floor-to-ceiling windows overlooking the Shard.",
        imageUrl: "../assets/house-6.webp",
        price: "₹22100",
        fakePrice: "₹26300",
        review: "Very Good",
        reviewPoint: "8.4",
        totalReviews: "814",
        facilities: ["Gym", "8 Restaurants", "Free WiFi", "Coffee"],
        locationHighlights: [
            { name: "Aldgate East Station", distance: "100m", type: "Transport" },
            { name: "The Tower of London", distance: "1km", type: "Landmark" },
            { name: "Spitalfields Market", distance: "800m", type: "Shopping" }
        ],
        roomTypes: [
            {
                name: "Locke Studio",
                specs: "King Bed • Smart Kitchen",
                features: ["L-Shaped Sofa", "Power Shower", "Yoga Classes"],
                price: "₹21000",
                savings: "Work-from-hotel Deal"
            }
        ],
        faqs: [
            { q: "Is there a co-working space?", a: "Yes, our lobby is designed as a collaborative workspace with high-speed internet." }
        ],
        policies: {
            checkIn: "4:00 PM",
            checkOut: "11:00 AM",
            cancellation: "Free until 2:00 PM on day of arrival.",
            notes: "Pets are welcome for a small cleaning fee."
        }
    }
];

export const guestFavorites = [
    {
        id: 1,
        hotelId: "cozy-cottage-in-shimla",
        name: "Cozy Cottage in Shimla",
        place: "Shimla, India",
        description: "A charming traditional cottage nestled in the deodar forests. Offering a peaceful retreat with authentic Himachali architecture and cozy fireplaces.",
        imageUrl: "https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
        price: "₹7,000",
        fakePrice: "₹9,500",
        review: "Nice",
        reviewPoint: "4.95",
        totalReviews: "20K",
        facilities: ["Free WiFi", "Fireplace", "Kitchen", "Mountain View"],
        locationHighlights: [
            { name: "The Ridge", distance: "1.5km", type: "City Center" },
            { name: "Mall Road", distance: "1.2km", type: "Shopping" },
            { name: "Jakhu Temple", distance: "3km", type: "Landmark" }
        ],
        roomTypes: [
            {
                name: "Standard Pine Room",
                specs: "1 Queen Bed • 250 sq ft",
                features: ["Heater", "Tea Maker", "Forest View"],
                price: "₹7,000",
                savings: "Member Deal"
            }
        ],
        faqs: [
            { q: "Is parking available?", a: "Yes, we have space for two light vehicles at the cottage entrance." }
        ],
        policies: {
            checkIn: "12:00 PM",
            checkOut: "11:00 AM",
            cancellation: "Flexible: Full refund 24 hours before arrival.",
            notes: "Please carry a valid Govt ID."
        }
    },
    {
        id: 2,
        hotelId: "beachfront-villa-in-goa",
        name: "Beachfront Villa in Goa",
        place: "Goa, India",
        description: "Step directly onto the golden sands from this luxury villa. Features a private infinity pool and an expansive deck for sunset viewing.",
        imageUrl: "https://goavillaholiday.com/assets/img/custom/villa/dreamwood/1.jpg",
        price: "₹20,000",
        fakePrice: "₹25,000",
        review: "Very Good",
        reviewPoint: "4.98",
        totalReviews: "40K",
        facilities: ["Private Pool", "Beach Access", "Barbecue", "Free WiFi"],
        locationHighlights: [
            { name: "Calangute Beach", distance: "50m", type: "Beach" },
            { name: "Aguada Fort", distance: "4km", type: "History" },
            { name: "Tito's Lane", distance: "2km", type: "Nightlife" }
        ],
        roomTypes: [
            {
                name: "Oceanfront Master Suite",
                specs: "1 King Bed • 500 sq ft • Private Deck",
                features: ["Outdoor Shower", "Mini Bar", "Sea View"],
                price: "₹20,000",
                savings: "Seasonal Offer"
            }
        ],
        faqs: [
            { q: "Do you provide airport transfers?", a: "Yes, we can arrange a private luxury sedan for an additional charge." }
        ],
        policies: {
            checkIn: "2:00 PM",
            checkOut: "11:00 AM",
            cancellation: "Strict: No refund within 7 days of arrival.",
            notes: "Music allowed until 10:00 PM."
        }
    },
    {
        id: 3,
        hotelId: "elegant-stylish-apt-hungary",
        name: "Elegant & Stylish Apartment City Center",
        place: "Hungary",
        description: "A chic, minimalist apartment in the heart of the city. Perfect for urban explorers seeking style and comfort with top-tier amenities.",
        imageUrl: "../assets/house-7.webp",
        price: "₹12,143",
        fakePrice: "₹15,500",
        review: "Wonderful",
        reviewPoint: "9.4",
        totalReviews: "107",
        facilities: ["Smart Home System", "Kitchenette", "Free WiFi", "Nespresso Machine"],
        locationHighlights: [
            { name: "Parliament Building", distance: "1km", type: "Landmark" },
            { name: "Chain Bridge", distance: "1.5km", type: "Landmark" },
            { name: "Jewish Quarter", distance: "500m", type: "Nightlife" }
        ],
        roomTypes: [
            {
                name: "Modern Studio",
                specs: "1 Double Bed • City View",
                features: ["Smart TV", "Designer Furniture", "Rain Shower"],
                price: "₹12,143",
                savings: "Top Rated"
            }
        ],
        faqs: [
            { q: "Is there a grocery store nearby?", a: "Yes, there is a 24/7 supermarket just 100 meters away." }
        ],
        policies: {
            checkIn: "3:00 PM",
            checkOut: "10:00 AM",
            cancellation: "Moderate: 50% refund up to 5 days before arrival.",
            notes: "Self check-in with keypad."
        }
    },
    {
        id: 4,
        hotelId: "cheval-three-quays-london",
        name: "Cheval Three Quays at The Tower of London",
        place: "UK, London",
        description: "Award-winning apartments overlooking the Thames. Experience unparalleled views of Tower Bridge and the Shard from your floor-to-ceiling windows.",
        imageUrl: "../assets/house-8.webp",
        price: "₹44,690",
        fakePrice: "₹52,000",
        review: "Wonderful",
        reviewPoint: "9.4",
        totalReviews: "790",
        facilities: ["24h Concierge", "Gym", "River View", "Free WiFi"],
        locationHighlights: [
            { name: "Tower Hill Station", distance: "300m", type: "Transport" },
            { name: "The Shard", distance: "1.2km", type: "Landmark" },
            { name: "Borough Market", distance: "1.5km", type: "Food" }
        ],
        roomTypes: [
            {
                name: "One Bedroom River View",
                specs: "1 King Bed • Thames View",
                features: ["Full Kitchen", "Luxury Toiletries", "Balcony"],
                price: "₹44,690",
                savings: "Early Bird Offer"
            }
        ],
        faqs: [
            { q: "Is the gym open 24/7?", a: "Yes, our residents' gym is accessible at any time." }
        ],
        policies: {
            checkIn: "4:00 PM",
            checkOut: "11:00 AM",
            cancellation: "Flexible: Free cancellation 48h prior.",
            notes: "No pets allowed."
        }
    },
    {
        id: 5,
        hotelId: "villa-domina-split",
        name: "Villa Domina",
        place: "Split City Center, Croatia",
        description: "Housed in a meticulously restored stone building. Villa Domina combines Mediterranean warmth with high-end modern hospitality.",
        imageUrl: "../assets/house-9.webp",
        price: "₹5,231",
        fakePrice: "₹7,800",
        review: "Wonderful",
        reviewPoint: "9.3",
        totalReviews: "1.3K",
        facilities: ["Airport Shuttle", "Air Conditioning", "Free WiFi", "Coffee Bar"],
        locationHighlights: [
            { name: "Diocletian's Palace", distance: "400m", type: "History" },
            { name: "Split Riva", distance: "500m", type: "Walkway" },
            { name: "Ferry Port", distance: "1km", type: "Transport" }
        ],
        roomTypes: [
            {
                name: "Deluxe Stone Room",
                specs: "1 Queen Bed • Exposed Brick",
                features: ["Soundproofing", "Mini Fridge", "Historical View"],
                price: "₹5,231",
                savings: "Best Value"
            }
        ],
        faqs: [
            { q: "How far is the beach?", a: "Bačvice Beach is a 15-minute walk from the property." }
        ],
        policies: {
            checkIn: "2:00 PM",
            checkOut: "10:00 AM",
            cancellation: "Flexible: Full refund 7 days before arrival.",
            notes: "Quiet hours after 11:00 PM."
        }
    },
    {
        id: 6,
        hotelId: "apartments-by-sloane-club",
        name: "The Apartments by the Sloane Club",
        place: "UK, London",
        description: "Nestled in the heart of Chelsea. These sophisticated apartments offer an exclusive residential experience with access to club amenities.",
        imageUrl: "../assets/house-10.webp",
        price: "₹46,493",
        fakePrice: "₹55,000",
        review: "Excellent",
        reviewPoint: "8.8",
        totalReviews: "247",
        facilities: ["Club Access", "Fine Dining", "Free WiFi", "Laundry"],
        locationHighlights: [
            { name: "Sloane Square Station", distance: "200m", type: "Transport" },
            { name: "Harrods", distance: "1.2km", type: "Shopping" },
            { name: "Saatchi Gallery", distance: "500m", type: "Art" }
        ],
        roomTypes: [
            {
                name: "Chelsea Studio",
                specs: "1 King Bed • Designer Interior",
                features: ["Luxury Bedding", "Daily Housekeeping", "Tablet Control"],
                price: "₹46,493",
                savings: "Long Stay Discount"
            }
        ],
        faqs: [
            { q: "Can guests use the Sloane Club dining room?", a: "Yes, residents have full access to the Club's dining and bar facilities." }
        ],
        policies: {
            checkIn: "3:00 PM",
            checkOut: "11:00 AM",
            cancellation: "Strict: Full refund only 14 days prior.",
            notes: "Smart casual dress code for club areas."
        },
    }
];
// All footer columns data – centralized and easy to maintain/update
export const footerColumns = [
    {
        title: "Travixle",
        links: [
            "About Us",
            "Our Story",
            "Leadership Team",
            "Careers",
            "Press & Media",
            "Investor Relations",
            "Sustainability",
            "Diversity & Inclusion",
        ],
    },
    {
        title: "Explore",
        links: [
            "Hotels & Accommodations",
            "Flights",
            "Car Rentals",
            "Vacation Rentals",
            "Attractions & Tours",
            "Cruises",
            "Travel Insurance",
            "Genius Loyalty Program",
            "Gift Cards",
        ],
    },
    {
        title: "Support",
        links: [
            "Help Center",
            "Contact Us",
            "Booking Management",
            "Cancellation Policies",
            "COVID-19 Resources",
            "Safety & Security",
            "Report an Issue",
            "Accessibility",
        ],
    },
    {
        title: "Partners",
        links: [
            "List Your Property",
            "Affiliate Program",
            "Business Travel Solutions",
            "Advertising",
            "Partner Portal",
            "API Integration",
            "Connectivity Partners",
        ],
    },
    {
        title: "Community",
        links: [
            "Travel Stories",
            "Traveler Reviews",
            "Destination Guides",
            "Blog",
            "Travel Forum",
            "Responsible Travel",
            "Volunteer Opportunities",
        ],
    },
    {
        title: "Legal & Trust",
        links: [
            "Privacy Policy",
            "Terms of Service",
            "Cookie Policy",
            "Modern Slavery Statement",
            "Human Rights Policy",
            "License Information",
            "Do Not Sell My Info",
        ],
    },
];

export const platformFaqs = [
  {
    question: "How do I make a booking on this platform?",
    answer: "Simply search for your destination, choose your preferred hotel, and click 'See Availability.' Once you select a room, you'll enter your guest details and receive an instant confirmation email once the booking is complete."
  },
  {
    question: "Are there any hidden booking fees?",
    answer: "No, we believe in transparent pricing. The price you see includes all mandatory taxes and service charges. Any optional fees (like parking or spa services) will be clearly listed by the hotel."
  },
  {
    question: "Can I cancel or change my booking through the site?",
    answer: "Yes. You can manage your booking through your account or the link in your confirmation email. Cancellation policies vary by property, so please check the 'Free Cancellation' status before booking."
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept all major credit and debit cards, including Visa, Mastercard, and American Express. Many properties also offer a 'Book Now, Pay Later' option where you pay directly at the hotel."
  },
  {
    question: "How do I know if my booking is confirmed?",
    answer: "As soon as you complete the checkout process, a confirmation page will appear. We also send a detailed confirmation email to your registered address with your booking ID and check-in instructions."
  },
  {
    question: "How does the 'Best Price Guarantee' work?",
    answer: "If you find a lower price for the same room and conditions on another website after booking with us, we will match the price or refund the difference. Just contact our support team with the details."
  }
];

export const renderAmenities = () => {
    // Get all potential amenity data from the API
    const amenitiesArray = hotel.amenities || []; // Numeric IDs like [35, 40]
    const extensionsArray = hotel.extensions || []; // String labels like ["Free Wi-Fi", "Pool"]

    const iconMap = [
      {
        id: "wifi",
        icon: <Wifi size={14} />,
        label: "WiFi",
        codes: [35, 29], // Official SearchApi IDs for WiFi
        keywords: ["wifi", "wi-fi", "internet"],
      },
      {
        id: "pool",
        icon: <Waves size={14} />,
        label: "Pool",
        codes: [4, 5, 6, 32], // IDs for Indoor, Outdoor, General Pool
        keywords: ["pool", "swimming"],
      },
      {
        id: "ac",
        icon: <Wind size={14} />,
        label: "AC",
        codes: [40, 4], // ID for Air-conditioned
        keywords: ["air conditioning", "ac", "air-conditioned"],
      },
      {
        id: "parking",
        icon: <Car size={14} />,
        label: "Parking",
        codes: [1, 3], // Free parking, General parking
        keywords: ["parking"],
      },
      {
        id: "dining",
        icon: <Coffee size={14} />,
        label: "Breakfast",
        codes: [8, 9, 15], // Restaurant, Free breakfast, Bar
        keywords: ["breakfast", "dining", "restaurant"],
      },
    ];

   
  };