export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;          // in KZT
  rating: number;         // 1-5, can be decimal
  image: string;          // main image URL
  images: string[];       // gallery image URLs (min 3)
  link: string;           // kaspi.kz product page
}