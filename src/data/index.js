import { naanItems, paneerItems, mushroomItems } from "./items";
import { categories } from "./category";

export { categories };

export const items = [...naanItems, ...paneerItems, ...mushroomItems];

export const similiarItems = [naanItems[0], paneerItems[1], mushroomItems[2]];

export const popularItems = [...similiarItems];
