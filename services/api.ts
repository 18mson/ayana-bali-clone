import { 
  resortInfo,
  resortProperties,
  dining,
  experiences,
  rooms,
  gallery
} from '@/data/mockData';

export const api = {
  getResortInfo: async () => {
    // Simulating API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { data: resortInfo };
  },
  
  getResortProperties: async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { data: resortProperties };
  },

  getDining: async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { data: dining };
  },

  getExperiences: async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { data: experiences };
  },

  getRooms: async (category: string | null = null) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const filteredRooms = category 
      ? rooms.filter(room => room.type === category)
      : rooms;
    return { data: filteredRooms };
  },

  getGallery: async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { data: gallery };
  }
};