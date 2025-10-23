export interface Room {
  id: string;
  name: string;
  type: string;
  price: number;
  description: string;
  longDescription: string;
  maxGuests: number;
  size: number;
  bedType: string;
  checkIn: string;
  checkOut: string;
  images: {
    url: string;
    alt: string;
  }[];
  amenities: {
    category: string;
    items: string[];
  }[];
  services: {
    name: string;
    description: string;
  }[];
  features: string[];
}

export interface ResortProperty {
  name: string;
  description: string;
  position: {
    top: string;
    left: string;
  };
}

export const resortProperties: ResortProperty[] = [
  {
    name: "AYANA Main Resort",
    description: "Our flagship accommodation featuring luxury rooms and suites",
    position: {
      top: "30%",
      left: "25%"
    }
  },
  {
    name: "RIMBA by AYANA",
    description: "Modern resort with forest views and multiple pools",
    position: {
      top: "45%",
      left: "50%"
    }
  },
  {
    name: "Private Villas",
    description: "Exclusive villas with personal pools and ocean views",
    position: {
      top: "60%",
      left: "35%"
    }
  },
  {
    name: "Rock Bar AYANA",
    description: "Iconic clifftop bar with sunset views",
    position: {
      top: "70%",
      left: "55%"
    }
  }
];

export const rooms: Room[] = [
  {
    id: "ocean-view-room",
    name: "Ocean View Room",
    type: "One Bedroom",
    price: 450,
    description: "Luxurious room with stunning ocean views",
    longDescription: "The 52-square-meter Ocean View Rooms provide breathtaking views of the tropical gardens and the Indian Ocean. Designed for comfort and relaxation, they boast marble floors, traditional Balinese motifs, and artisan-crafted wooden ornaments. The fusion of artistic touches and modern interiors creates a luxurious, tranquil atmosphere.",
    maxGuests: 3,
    size: 52,
    bedType: "King or Twin",
    checkIn: "15:00",
    checkOut: "12:00",
    images: [
      {
        url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=2070",
        alt: "Ocean View Room - Main View"
      },
      {
        url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=2070",
        alt: "Ocean View Room - Bathroom"
      },
      {
        url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=2070",
        alt: "Ocean View Room - Balcony View"
      }
    ],
    amenities: [
      {
        category: "Room Features",
        items: [
          "Private balcony with ocean view",
          "Marble bathroom with separate shower and bathtub",
          "42-inch LED TV with international channels",
          "High-speed WiFi",
          "Individual climate control"
        ]
      },
      {
        category: "Comfort",
        items: [
          "Luxury bedding",
          "Pillow menu",
          "Blackout curtains",
          "Seating area with sofa",
          "Work desk"
        ]
      },
      {
        category: "Bathroom",
        items: [
          "Sensatia Botanicals amenities",
          "Deep soaking bathtub",
          "Rain shower",
          "Luxury bathrobes and slippers",
          "Hair dryer"
        ]
      }
    ],
    services: [
      {
        name: "Rock Bar Benefit",
        description: "Priority access to sunset time"
      },
      {
        name: "F&B and Spa Benefit",
        description: "10% discount on eligible menu items for direct bookings"
      },
      {
        name: "AYANA Signature Service",
        description: "Welcome drink, flower lei, and premium bath amenities"
      }
    ],
    features: [
      "24-hour room service",
      "Daily housekeeping",
      "Evening turndown service",
      "Complimentary mineral water",
      "Access to resort pools"
    ]
  },
  {
    id: "pool-access-villa",
    name: "Pool Access Villa",
    type: "One Bedroom",
    price: 850,
    description: "Exclusive villa with direct pool access",
    longDescription: "Immerse yourself in luxury with our Pool Access Villa, offering direct access to a stunning lagoon pool. This spacious accommodation features contemporary Balinese design elements and premium amenities for an unforgettable stay.",
    maxGuests: 3,
    size: 65,
    bedType: "King",
    checkIn: "15:00",
    checkOut: "12:00",
    images: [
      {
        url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=2070",
        alt: "Pool Access Villa - Main View"
      },
      {
        url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=2070",
        alt: "Pool Access Villa - Pool"
      }
    ],
    amenities: [
      {
        category: "Villa Features",
        items: [
          "Direct pool access",
          "Private terrace",
          "Separate living area",
          "Premium entertainment system",
          "Butler's pantry"
        ]
      }
    ],
    services: [
      {
        name: "Villa Privileges",
        description: "24/7 butler service and exclusive amenities"
      }
    ],
    features: [
      "Private pool access",
      "Exclusive villa amenities",
      "Premium butler service"
    ]
  },
  {
    id: "presidential-suite",
    name: "Presidential Suite",
    type: "Two Bedroom",
    price: 1200,
    description: "Ultimate luxury with panoramic views and butler service",
    longDescription: "Experience unparalleled luxury in our Presidential Suite, featuring panoramic ocean views, private butler service, and exclusive access to resort amenities. This palatial suite offers the perfect blend of privacy and luxury.",
    maxGuests: 6,
    size: 300,
    bedType: "King",
    checkIn: "15:00",
    checkOut: "12:00",
    images: [
      {
        url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=2070",
        alt: "Presidential Suite - Living Room"
      },
      {
        url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=2070",
        alt: "Presidential Suite - Master Bedroom"
      }
    ],
    amenities: [
      {
        category: "Suite Features",
        items: [
          "Panoramic ocean views",
          "Private infinity pool",
          "Multiple bedrooms and bathrooms",
          "Full kitchen",
          "Private gym"
        ]
      }
    ],
    services: [
      {
        name: "Presidential Benefits",
        description: "Exclusive access to all resort facilities and VIP treatment"
      }
    ],
    features: [
      "24/7 dedicated butler",
      "Private chef available",
      "Luxury airport transfer"
    ]
  }
];