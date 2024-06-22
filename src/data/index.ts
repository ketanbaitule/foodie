import { items } from "./items";
import { categories } from "./category";

export { categories };

export { items };

export const similiarItems = [items[0], items[1], items[2]];

export const popularItems = [...similiarItems];

export const getCategoryItems = (category: string) => {
  return items.filter((item) => item.category === category);
};

export const getItemById = (id: number) => {
  return items.find((item) => item.id === id);
};

export interface Item {
  id: number;
  foodName: string;
  discount: string;
  price: string;
  rating: number;
  imgUrl: string;
  category: string;
}
