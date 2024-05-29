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

export const ProductController = {
  createProduct,
};
