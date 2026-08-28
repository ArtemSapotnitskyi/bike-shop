// bike.schema.ts
import { z } from "zod";

export const bikeVariantSchema = z.object({
  description: z.string().min(10, "Description must be at least 10 characters"),
  color: z.string(),
  colorHex: z.string(),
  price: z.number().positive("The price must be greater than zero"),
  stock: z.number().int().nonnegative("The balance cannot be negative"),
  idBrand: z.uuid("Invalid brand ID"),
  idType: z.uuid("Invalid category ID"),
});

export const specificationSchema = z.object({
  title: z.string().min(1, "Title is required (e.g., Top Speed)"),
  value: z.string().min(1, "Value is required (e.g., 299)"),
  unit: z.string().min(1, "Unit is required (e.g., km/h)"),
});

export const createBikeSchema = z.object({
  name: z.string().min(2, "Name must contain at least 2 characters"),
  subtitle: z.string().optional(),
  variants: z
    .array(bikeVariantSchema)
    .min(1, "A bike must have at least one variant"),
  specifications: z.array(specificationSchema).optional(),
});

export const updateBikeSchema = createBikeSchema.partial();
