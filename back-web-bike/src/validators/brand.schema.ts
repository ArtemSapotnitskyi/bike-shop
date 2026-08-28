import { z } from "zod";

export const createBrandSchema = z.object({
  name: z.string().min(2, "Name must contain at least 2 characters"),
  idLogoFile: z.uuid("Invalid logo file ID").optional(),
});

export const updateBrandSchema = createBrandSchema.partial();
