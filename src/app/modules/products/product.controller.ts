import { Request, Response } from "express";
import { ProductService } from "./product.service";
import { ProductZodSchema } from "./product.validator";

const createProduct = async (req: Request, res: Response) => {
  try {
    const {
      id,
      name,
      description,
      price,
      category,
      tags,
      variants,
      inventory,
    } = req.body;

    //? import zod validatioin data

    const zodValidation = ProductZodSchema.parse({
      id,
      name,
      description,
      price,
      category,
      tags,
      variants,
      inventory,
    });
    const result = await ProductService.createProductDatabase(zodValidation);
    res.status(200).json({
      success: true,
      message: "New Product is Added Successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || "Something went wrong !!",
      error: err,
    });
  }
};

//? Get all Data from database

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductService.retrieveAllProducts();

    res.status(200).json({
      success: true,
      message: `All data retrive successfully`,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong !!",
      err: error,
    });
  }
};
//? Get Single Data from database

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductService.retrieveSingleProduct(productId);

    res.status(200).json({
      success: true,
      message: `Retrive a single product successfully`,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong !!",
      err: error,
    });
  }
};

//?Update a Data from database

const updateSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductService.retrieveSingleProduct(productId);

    res.status(200).json({
      success: true,
      message: `Retrive a single product successfully`,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong !!",
      err: error,
    });
  }
};
//? Delete a Data from database

const delteSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductService.deleteSingleProduct(productId);

    res.status(200).json({
      success: true,
      message: `Delete a single product successfully`,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "Something went wrong !!",
      err: error,
    });
  }
};

export const ProductController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  delteSingleProduct,
};
