export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Breakfast' | 'Brunch' | 'Lunch' | 'Desserts' | 'Drinks' | 'Gluten-free options';
  image: string;
  isGlutenFree?: boolean;
  isSeedOilsFree?: boolean;
  isPopular?: boolean;
}

export interface DaySchedule {
  day: string;
  open: string;
  close: string;
  isClosed: boolean;
}

export interface RestaurantInfo {
  name: string;
  slogan: string;
  concept: string;
  address: string;
  plaza: string;
  city: string;
  country: string;
  phone: string;
  phoneRaw: string;
  pricePerPerson: string;
  instagram: string;
  instagramUrl: string;
  creatorsInstagram: string;
  creatorsInstagramUrl: string;
  googleRating: {
    score: number;
    reviewsCount: number;
  };
  uberEatsRating: {
    score: number;
    reviewsCount: number;
  };
  services: {
    id: string;
    label: string;
    description: string;
  }[];
}
