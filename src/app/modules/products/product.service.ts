import Product from "../product.module";
import { TProduct } from "./product.interface";

const createProductDatabase = async (productData: TProduct) => {
  //?built in static method used here

  const result = await Product.create(productData);

  return result;
};

//?2. Retrieve a List of All Products
const retrieveAllProducts = async () => {
  const result = await Product.find({}).select({});
  return result;
};

//?2. Retrieve a Single Product
const retrieveSingleProduct = async (id: string) => {
  const result = await Product.findOne({ id });
  return result;
};

//?Upadate a single data
const updateSingleProduct = async (id: string) => {
  const result = await Product.updateOne({ id });
  return result;
};
//?Delete a single data
const deleteSingleProduct = async (id: string) => {
  const result = await Product.deleteOne({ id });
  return result;
};

export const ProductService = {
  createProductDatabase,
  retrieveAllProducts,
  retrieveSingleProduct,
  updateSingleProduct,
  deleteSingleProduct,
};
