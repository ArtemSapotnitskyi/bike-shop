import { z } from "zod";
import { Role } from "../generated/prisma/enums.js";

export const createUserSchema = z.object({
  name: z.string().min(2, "The name must contain at least 2 characters"),
  surname: z.string().min(2, "Your surname must contain at least 2 characters"),
  email: z.email("Invalid email format"),
  password: z
    .string()
    .min(6, "The password must be at least 6 characters long"),
});

//Schema for updating User info. partial() using for making name, surname, email і password optional
export const updateUserSchema = createUserSchema.partial();
