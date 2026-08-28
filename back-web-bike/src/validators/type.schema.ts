import { z } from "zod";

export const createTypeSchema = z.object({
  name: z.string().min(2, "Name must contain at least 2 characters"),
  idImageFile: z.uuid("Invalid type file ID").optional(),
});

export const updateTypeSchema = createTypeSchema.partial();
