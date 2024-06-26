"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_service_1 = require("./product.service");
const product_validator_1 = require("./product.validator");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, name, description, price, category, tags, variants, inventory, } = req.body;
        //? import zod validatioin data
        const zodValidation = product_validator_1.ProductZodSchema.parse({
            id,
            name,
            description,
            price,
            category,
            tags,
            variants,
            inventory,
        });
        const result = yield product_service_1.ProductService.createProductDatabase(zodValidation);
        res.status(200).json({
            success: true,
            message: "New Product is Added Successfully",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || "Something went wrong !!",
            error: err,
        });
    }
});
//? Get all Data from database
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_service_1.ProductService.retrieveAllProducts();
        res.status(200).json({
            success: true,
            message: `All data retrive successfully`,
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "Something went wrong !!",
            err: error,
        });
    }
});
//? Get Single Data from database
const getSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductService.retrieveSingleProduct(productId);
        res.status(200).json({
            success: true,
            message: `Retrive a single product successfully`,
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "Something went wrong !!",
            err: error,
        });
    }
});
//?Update a Data from database
const updateSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductService.retrieveSingleProduct(productId);
        res.status(200).json({
            success: true,
            message: `Retrive a single product successfully`,
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "Something went wrong !!",
            err: error,
        });
    }
});
//? Delete a Data from database
const delteSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductService.deleteSingleProduct(productId);
        res.status(200).json({
            success: true,
            message: `Delete a single product successfully`,
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "Something went wrong !!",
            err: error,
        });
    }
});
exports.ProductController = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    delteSingleProduct,
};
