import { Request, Response } from "express";
import { ProductService } from "./product.service";

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
    const result = await ProductService.createProductDatabase({
      id,
      name,
      description,
      price,
      category,
      tags,
      variants,
      inventory,
    });
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
