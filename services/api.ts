// Mock data for resort information and properties
const mockResortInfo = {
  name: "RIMBA",
  tagline: "Enveloped in Forest Tranquility",
  description: "Nestled in a tranquil forest setting, RIMBA offers an escape into nature's embrace. Where modern luxury meets untamed beauty, creating an unforgettable sanctuary. A place where time slows down and every moment becomes a cherished memory",
  location: "AYANA BALI"
};

const mockRooms = [
  {
    id: 1,
    name: "Ocean View Suite",
    category: "One Bedroom",
    description: "Luxurious suite with stunning ocean views, private balcony, and modern amenities for a perfect coastal retreat.",
    price: 450,
    size: "75 m²",
    guests: "2 Adults",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=2070",
    amenities: ["King Bed", "Ocean View", "Private Balcony", "Rain Shower", "Mini Bar", "Free Wi-Fi"]
  },
  {
    id: 2,
    name: "Forest Villa",
    category: "Villa",
    description: "Secluded villa surrounded by lush tropical forest, featuring a private pool and outdoor living space.",
    price: 850,
    size: "150 m²",
    guests: "4 Adults",
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=2070",
    amenities: ["Private Pool", "King Bed", "Living Room", "Kitchenette", "Garden View", "Butler Service"]
  },
  {
    id: 3,
    name: "Garden Suite",
    category: "One Bedroom",
    description: "Peaceful suite overlooking manicured tropical gardens with a spacious terrace for outdoor relaxation.",
    price: 350,
    size: "65 m²",
    guests: "2 Adults",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=2070",
    amenities: ["Queen Bed", "Garden View", "Terrace", "Soaking Tub", "Work Desk", "Free Wi-Fi"]
  },
  {
    id: 4,
    name: "Family Pool Suite",
    category: "Two Bedroom",
    description: "Spacious two-bedroom suite ideal for families, featuring a private plunge pool and entertainment area.",
    price: 750,
    size: "120 m²",
    guests: "4 Adults",
    image: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&q=80&w=2070",
    amenities: ["2 King Beds", "Private Pool", "Living Room", "Dining Area", "Kids Play Area", "24/7 Room Service"]
  }
];

const mockResortProperties = [
  {
    name: "Main Pool",
    position: { top: '30%', left: '40%' }
  },
  {
    name: "Spa Retreat",
    position: { top: '50%', left: '60%' }
  },
  {
    name: "Forest Villa",
    position: { top: '70%', left: '30%' }
  }
];

const mockExperiences = [
  {
    id: 1,
    name: "Sunrise Yoga Retreat",
    category: "Wellness",
    description: "Begin your day with an energizing yoga session overlooking the ocean. Our expert instructors guide you through poses while the gentle morning breeze and sounds of nature create the perfect atmosphere for mindfulness.",
    duration: "1.5 hours",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=2070"
  },
  {
    id: 2,
    name: "Traditional Cooking Class",
    category: "Cultural",
    description: "Learn the secrets of authentic Balinese cuisine in our chef-led cooking class. Visit local markets, discover exotic ingredients, and prepare traditional dishes in our stunning outdoor kitchen.",
    duration: "4 hours",
    image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80&w=2070"
  },
  {
    id: 3,
    name: "Ocean Sunset Cruise",
    category: "Adventure",
    description: "Set sail on our luxury catamaran for a memorable sunset experience. Enjoy champagne and canapés while cruising along Bali's spectacular coastline as the sun paints the sky in brilliant colors.",
    duration: "3 hours",
    image: "https://images.unsplash.com/photo-1514649923863-ceaf75b7ec6c?auto=format&fit=crop&q=80&w=2070"
  },
  {
    id: 4,
    name: "Sacred Temple Tour",
    category: "Cultural",
    description: "Discover Bali's spiritual heart with guided visits to ancient temples. Learn about local customs, participate in traditional ceremonies, and gain insights into the island's rich cultural heritage.",
    duration: "6 hours",
    image: "https://images.unsplash.com/photo-1604841940435-b756d6c7567c?auto=format&fit=crop&q=80&w=2070"
  }
];

const mockDining = [
  {
    id: 1,
    name: "Kisik Seafood Restaurant",
    cuisine: "Seafood",
    description: "Perched on the cliffs with stunning ocean views, Kisik offers the freshest seafood prepared with local and international flavors. Experience dining in traditional Balinese bamboo gazebos as waves crash below.",
    hours: "6:00 PM - 11:00 PM",
    image: "https://images.unsplash.com/photo-1539136788836-5699e78bfc75?auto=format&fit=crop&q=80&w=2070"
  },
  {
    id: 2,
    name: "To'ge Pan Asian",
    cuisine: "Asian Fusion",
    description: "A sophisticated dining venue featuring the best of Asian cuisine. From sushi to dim sum, our expert chefs create authentic dishes with a modern twist in an elegant setting with panoramic forest views.",
    hours: "12:00 PM - 10:00 PM",
    image: "https://images.unsplash.com/photo-1532347922424-c652d9b7208e?auto=format&fit=crop&q=80&w=2070"
  },
  {
    id: 3,
    name: "Padi Fine Dining",
    cuisine: "International",
    description: "Set amidst a stunning water garden, Padi offers an extraordinary fine dining experience. Our innovative menu combines the finest ingredients with artistic presentation and impeccable service.",
    hours: "6:30 PM - 10:30 PM",
    image: "https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&q=80&w=2070"
  },
  {
    id: 4,
    name: "Sunset Beach Bar",
    cuisine: "International",
    description: "The perfect spot to unwind with craft cocktails and light bites while watching Bali's famous sunset. Features a swim-up pool bar and comfortable lounge seating with ocean views.",
    hours: "10:00 AM - 11:00 PM",
    image: "https://images.unsplash.com/photo-1601051297657-29c1d45a166b?auto=format&fit=crop&q=80&w=2070"
  }
];

export const api = {
  getResortInfo: async () => {
    // Simulating API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { data: mockResortInfo };
  },
  
  getResortProperties: async () => {
    // Simulating API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { data: mockResortProperties };
  },

  getDining: async () => {
    // Simulating API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { data: mockDining };
  },

  getExperiences: async () => {
    // Simulating API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { data: mockExperiences };
  },

  getRooms: async (category: string | null = null) => {
    // Simulating API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    const filteredRooms = category 
      ? mockRooms.filter(room => room.category === category)
      : mockRooms;
    return { data: filteredRooms };
  }
};