"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Define the schema for Variant
const VariantSchema = new mongoose_1.Schema({
    type: { type: String, required: true },
    value: { type: String, required: true },
});
// Define the schema for Inventory
const InventorySchema = new mongoose_1.Schema({
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
});
// Define the main Product schema
const productSchema = new mongoose_1.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    tags: { type: [String], required: true },
    variants: { type: [VariantSchema], required: true },
    inventory: { type: InventorySchema, required: true },
});
//? Query Model Middleware. Here I have implement query
productSchema.pre("find", function (next) {
    this.find({}).select({
        id: 0,
        _id: 0,
        // name: 1,
        // description: 1,
        // price: 1,
        // category: 1,
        // tags: 1,
        "variants._id": 0,
        "inventory._id": 0,
    });
    next();
});
productSchema.post("find", function (next) {
    this.find({}).select({
        id: 0,
        _id: 0,
        // name: 1,
        // description: 1,
        // price: 1,
        // category: 1,
        // tags: 1,
        "variants._id": 0,
        "inventory._id": 0,
    });
    next();
});
// Create and export the Mongoose model
const Product = (0, mongoose_1.model)("Product", productSchema);
exports.default = Product;
