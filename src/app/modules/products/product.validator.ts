import { z } from "zod";

// Define Zod schema for Variant
const VariantSchema = z.object({
  type: z.string().min(3, "Minimum 3 charater required"),
  value: z.string().min(3, "Minimum 3 charater required"),
});

// Define Zod schema for Inventory
const InventorySchema = z.object({
  quantity: z.number().int(),
  inStock: z.boolean(),
});

// Define Zod schema for Product
const ProductZodSchema = z.object({
  id: z.string().max(20, "Maximum 20 charater required"), // Assuming id should be a UUID
  name: z.string().max(20, "Maximum 20 charater required"),
  description: z.string(),

  price: z.number().positive(`Negative value is not considerable`),
  category: z.string().min(3, "Minimum 3 charater required"),
  tags: z.array(z.string().min(3, "Minimum 3 charater required")),
  variants: z.array(VariantSchema),
  inventory: InventorySchema,
});

export { ProductZodSchema };
