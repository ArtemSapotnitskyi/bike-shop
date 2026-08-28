import { z } from "zod";
import { OrderStatus, PaymentStatus } from "../generated/prisma/client.js";

export const addressSchema = z.object({
  country: z.string().min(2, "Country is required"),
  city: z.string().min(2, "City is required"),
  street: z.string().min(5, "Street must be at least 5 characters"),
  phone: z.string().min(10, "Valid phone number is required"),
});

export const orderItemSchema = z.object({
  idBike: z
    .string()
    .regex(
      /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/,
      "Invalid bike ID",
    ),
  quantity: z.number().int().positive("Quantity must be at least 1"),
});

export const createOrderSchema = z.object({
  address: addressSchema,
  items: z
    .array(orderItemSchema)
    .min(1, "Order must contain at least one item"),
});

export const updateOrderStatusSchema = z.object({
  status: z.enum(OrderStatus, {
    message: "Invalid order status",
  }),
});

export const updatePaymentStatusSchema = z.object({
  status: z.enum(PaymentStatus, {
    message: "Invalid payment status",
  }),
});
