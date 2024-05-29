import Product from "../product.module";
import { TProduct } from "./product.interface";

const createProductDatabase = async (productData: TProduct) => {
  //?built in static method used here

  const result = await Product.create(productData);

  return result;
};

export const ProductService = {
  createProductDatabase,
};
