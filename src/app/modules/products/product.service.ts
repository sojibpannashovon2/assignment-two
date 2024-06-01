import Product from "../product.module";
import { TProduct } from "./product.interface";

const createProductDatabase = async (productData: TProduct) => {
  //?built in static method used here

  const result = await Product.create(productData);

  return result;
};

//?2. Retrieve a List of All Products
const retrieveAllProducts = async () => {
  const result = await Product.find({});
  return result;
};

export const ProductService = {
  createProductDatabase,
  retrieveAllProducts,
};
