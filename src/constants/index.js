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
        imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
    },
    {
        id: 2,
        name: "Beach Resorts",
        description: "Oceanfront relaxation and water sports",
        imageUrl: "https://images.unsplash.com/photo-1598598795006-ea2174659eaa?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 3,
        name: "Boutique Stays",
        description: "Unique, stylish, and intimate experiences",
        imageUrl: "https://images.unsplash.com/photo-1664189027407-a43a7295e01a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 4,
        name: "Villas & Apartments",
        description: "Private homes with kitchen and space",
        imageUrl: "https://plus.unsplash.com/premium_photo-1682377521697-bc598b52b08a?q=80&w=1215&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 5,
        name: "Homestays",
        description: "Live like a local with warm hospitality",
        imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
    },
    {
        id: 6,
        name: "Cabins",
        description: "Cozy wooden retreats in nature",
        imageUrl: "https://plus.unsplash.com/premium_photo-1686090449194-04ac2af9f758?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 7,
        name: "Cottages",
        description: "Charming countryside escapes for families",
        imageUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
    },
    {
        id: 8,
        name: "Glamping Sites",
        description: "Luxury camping under the stars",
        imageUrl: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
    },
    {
        id: 9,
        name: "Vacation Homes",
        description: "Spacious properties for group getaways",
        imageUrl: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
    },
    {
        id: 10,
        name: "Guest House",
        description: "Affordable comfort with personal touches",
        imageUrl: "https://images.unsplash.com/photo-1544124499-58912cbddaad?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
    },
    {
        id: 11,
        name: "Hostels",
        description: "Budget-friendly rooms for social travelers",
        imageUrl: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 12,
        name: "Motels",
        description: "Convenient roadside stops for motorists",
        imageUrl: "https://images.unsplash.com/photo-1625669709111-6df35affa0a5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        id: 13,
        name: "B&Bs",
        description: "Quaint lodging with homemade breakfast",
        imageUrl: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
    },
    {
        id: 14,
        name: "Ryokans",
        description: "Traditional Japanese inns with tatami",
        imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
    },
    {
        id: 15,
        name: "Riads",
        description: "Historic Moroccan homes with courtyards",
        imageUrl: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
    },
    {
        id: 16,
        name: "Resort Villages",
        description: "All-inclusive complexes with full recreation",
        imageUrl: "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
    },
];

export const weekendDeals = [
    {
        id: 1,
        name: "Emirates Palace",
        place: "Abu Dhabi",
        description: "Set on 85 hectares of landscaped gardens, this palatial beachfront hotel is 4 km from both the Marina Mall and the Qasr al-Hosn fort.",
        price: "₹1,65,405/night",
        fakePrice: "₹1,75,905",
        review: "Excellent",
        imageUrl: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/6f/5f/6e.jpg",
        reviewPoint: "4.8",
        totalReviews: "31K",
    },
    {
        id: 2,
        name: "Signiel Seoul",
        place: "South Korea",
        description: "This posh hotel in a contemporary skyscraper with views of the Han River is a 3-minute walk from the nearest subway station and 4 km from upscale shopping in the Gangnam District.",
        price: "₹32,938/night",
        fakePrice: "₹39,487",
        review: "Very Good",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/de/2b/08/caption.jpg?w=900&h=500&s=1",
        reviewPoint: "4.6",
        totalReviews: "3.1K",
    }, {
        id: 3,
        name: "ITC Grand Chola",
        place: "Guindy, Chennai",
        description: "Located on Anna Salai, it offers extensive, high-end amenities, including multiple dining options like Madras Pavilion and is a prominent landmark in the city. ",
        price: "₹14,160/night",
        fakePrice: "₹20,226",
        review: "Very Good",
        imageUrl: "https://www.itchotels.com/content/dam/itchotels/in/umbrella/itc/hotels/itcgrandchola-chennai/images/overview/overview-desktop/exterior-dusk.png",
        reviewPoint: "4.7",
        totalReviews: "42K",
    }, {
        id: 4,
        name: "Badrutt's Palace Hotel",
        place: "St. Moritz, Switzerland",
        description: "Built in 1896, this landmark luxury hotel, open seasonally, overlooks Lake Saint Moritz and offers views of the surrounding Swiss Alps. It's a 6-minute walk from the cable car and train stations, and 7 km from Engadin Airport.",
        price: "₹2,50,876",
        fakePrice: "₹3,55,987",
        review: "Excellent",
        imageUrl: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/3b/f3/c8/badrutt-s-palace-hotel.jpg?w=900&h=500&s=1",
        reviewPoint: "4.7",
        totalReviews: "1.3K",
    },

];

export const uniqueProperties = [
    {
        id: 1,
        name: "Treehouse in Kerala",
        place: "Kerala",
        description: "Stay among the treetops",
        imageUrl: "../assets/kerala.jpg",
        review: "Good",
        reviewPoint: "4.2",
        totalReviews: "2.1K",
    },
    {
        id: 2,
        name: "Glass Igloo in Manali",
        place: "Manali",
        description: "Stargazing luxury dome",
        review: "Very Good",
        reviewPoint: "4.5",
        totalReviews: "42K",
        imageUrl: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
    },
    {
        id: 3,
        name: "Aparthotel Stare Miasto",
        place: "Old Town, Poland, Krakow",
        imageUrl: "../assets/house-3.webp",
        review: "Excellent",
        reviewPoint: "8.8",
        totalReviews: "3.2K",
    }, {
        id: 4,
        name: "7Seasons Apartment Budapest",
        place: "06. Terézváros, Hungary, Budapest",
        imageUrl: "../assets/house-4.webp",
        review: "Excellent",
        reviewPoint: "8.7",
        totalReviews: "10K",
    },

    {
        id: 5,
        name: "Numa Florence Vita",
        place: "Santa Maria Novella, Italy, Florence",
        imageUrl: "../assets/house-5.webp",
        review: "Excellent",
        reviewPoint: "8.9",
        totalReviews: "1.1K",
    }, {
        id: 6,
        name: "Leman Locke",
        place: "Tower Hamlets, UK, London",
        imageUrl: "../assets/house-6.webp",
        review: "Very Good",
        reviewPoint: "8.4",
        totalReviews: "814",
    }
];

export const guestFavorites = [
    {
        id: 1,
        name: "Cozy Cottage in Shimla",
        place: "Shimla, India",
        rating: "4.95 ★",
        price: "₹7000 ",
        review: "Nice",
        totalReviews: "20K",
        imageUrl: "https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
    },
    {
        id: 2,
        name: "Beachfront Villa in Goa",
        place: "Goa, India",
        rating: "4.98 ★",
        price: "₹ 20,000",
        review: "Very Good",
        totalReviews: "40K",
        imageUrl: "https://goavillaholiday.com/assets/img/custom/villa/dreamwood/1.jpg",
    },
    {
        id: 3,
        name: "Elegant & Stylish Apartment City Center",
        place: "Hungary",
        rating: "9.4 ★",
        price: "₹ 12,143",
        review: "Wonderful",
        totalReviews: "107",
        imageUrl: "../assets/house-7.webp",
    },
    {
        id: 4,
        name: "Cheval Three Quays at The Tower of London",
        place: "UK, London",
        rating: "9.4 ★",
        price: "₹44,690 ",
        review: "Wonderful",
        totalReviews: "790",
        imageUrl: "../assets/house-8.webp",
    },
    {
        id: 5,
        name: "Villa Domina",
        place: "Split City Center, Croatia",
        rating: "9.3 ★",
        price: "₹5,231 ",
        review: "Wonderful",
        totalReviews: "1.3K",
        imageUrl: "../assets/house-9.webp",
    },
    {
        id: 6,
        name: "The Apartments by the Sloane Club",
        place: "UK, London",
        rating: "8.8 ★",
        price: "₹ 46,493",
        review: "Excellent",
        totalReviews: "247",
        imageUrl: "../assets/house-10.webp",
    },
];

// All footer columns data – centralized and easy to maintain/update
export const footerColumns = [
  {
    title: "TravelHub",
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
