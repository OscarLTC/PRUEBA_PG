export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image?: string;
  image_url?: string;
  is_active: boolean;
}
