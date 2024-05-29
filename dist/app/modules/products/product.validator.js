"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductZodSchema = void 0;
const zod_1 = require("zod");
// Define Zod schema for Variant
const VariantSchema = zod_1.z.object({
    type: zod_1.z.string().min(3, "Minimum 3 charater required"),
    value: zod_1.z.string().min(3, "Minimum 3 charater required"),
});
// Define Zod schema for Inventory
const InventorySchema = zod_1.z.object({
    quantity: zod_1.z.number().int(),
    inStock: zod_1.z.boolean(),
});
// Define Zod schema for Product
const ProductZodSchema = zod_1.z.object({
    id: zod_1.z.string().max(20, "Maximum 20 charater required"), // Assuming id should be a UUID
    name: zod_1.z.string().max(20, "Maximum 20 charater required"),
    description: zod_1.z.string(),
    price: zod_1.z.number().positive(`Negative value is not considerable`),
    category: zod_1.z.string().min(3, "Minimum 3 charater required"),
    tags: zod_1.z.array(zod_1.z.string().min(3, "Minimum 3 charater required")),
    variants: zod_1.z.array(VariantSchema),
    inventory: InventorySchema,
});
exports.ProductZodSchema = ProductZodSchema;
