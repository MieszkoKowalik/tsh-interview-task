export type ProductData = {
  id: number;
  name: string;
  description: string;
  rating: number;
  image: string;
  promo: boolean;
  active: boolean;
};

export type ProductsData = ProductData[];

export type User = { id: number; username: string; avatar: string };
