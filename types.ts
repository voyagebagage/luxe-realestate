
export interface Property {
  id: string;
  title: string;
  price: string;
  priceNum: number;
  address: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  imageUrl: string;
  category: 'Luxury' | 'City' | 'Beachfront' | 'Mountain';
  description: string;
}

export type Category = 'All' | 'Luxury' | 'City' | 'Beachfront' | 'Mountain';
