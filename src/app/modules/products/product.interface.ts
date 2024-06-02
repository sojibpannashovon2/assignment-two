import { Model } from "mongoose";

export interface TVariant {
  type: string;
  value: string;
}

export interface TInventory {
  quantity: number;
  inStock: boolean;
}

export interface TProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: TVariant[];
  inventory: TInventory;
}

//? Statics method

export interface ProductModel extends Model<TProduct> {
  isUserExists(id: string): Promise<TProduct | null>;
}
