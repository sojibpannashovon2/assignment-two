import { Schema, model } from "mongoose";
import {
  TInventory,
  TVariant,
  TProduct,
  ProductModel,
} from "./products/product.interface";

// Define the schema for Variant
const VariantSchema = new Schema<TVariant>({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

// Define the schema for Inventory
const InventorySchema = new Schema<TInventory>({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

// Define the main Product schema
const productSchema = new Schema<TProduct, ProductModel>({
  // id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: { type: [VariantSchema], required: true },
  inventory: { type: InventorySchema, required: true },
});

// Create and export the Mongoose model
const Product = model<TProduct, ProductModel>("Product", productSchema);

export default Product;
