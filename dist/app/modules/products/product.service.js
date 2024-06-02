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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const product_module_1 = __importDefault(require("../product.module"));
const createProductDatabase = (productData) => __awaiter(void 0, void 0, void 0, function* () {
    //?built in static method used here
    const result = yield product_module_1.default.create(productData);
    return result;
});
//?2. Retrieve a List of All Products
const retrieveAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_module_1.default.find({}).select({});
    return result;
});
//?2. Retrieve a Single Product
const retrieveSingleProduct = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_module_1.default.findOne({ id });
    return result;
});
exports.ProductService = {
    createProductDatabase,
    retrieveAllProducts,
    retrieveSingleProduct,
};
