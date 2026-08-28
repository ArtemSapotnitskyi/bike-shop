import { type Request, type Response } from "express";
import * as orderService from "../services/order.service.js";
import {
  createOrderSchema,
  updateOrderStatusSchema,
  updatePaymentStatusSchema,
} from "../validators/order.schema.js";

//Public
export const getPublicOrders = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id || typeof id !== "string") {
      return res.status(400).json({ message: "Invalid or missing order ID" });
    }

    const order = await orderService.getPublicOrders(id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    console.error("Error in getPublicOrders:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getPublicOrderById = async (req: Request, res: Response) => {
  try {
    const { id, idUser } = req.params;

    if (!id || typeof id !== "string") {
      return res.status(400).json({ message: "Invalid or missing order ID" });
    }

    if (!idUser || typeof idUser !== "string") {
      return res.status(400).json({ message: "Invalid or missing user ID" });
    }

    const order = await orderService.getPublicOrderById(id, idUser);

    if (!order) {
      return res.status(404).json({ message: "Order by ID not found" });
    }

    res.status(200).json(order);
  } catch (error) {
    console.error("Error in getPublicOrderById:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//Admin
export const getAdminAllOrders = async (req: Request, res: Response) => {
  try {
    const order = await orderService.getAdminAllOrders();
    res.status(200).json(order);
  } catch (error) {
    console.error("Error in getAdminAllOrders:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getAdminOrderById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id || typeof id !== "string") {
      return res.status(400).json({ message: "Invalid or missing order ID" });
    }
    const order = await orderService.getAdminOrderById(id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    console.error("Error in getAdminOrderById:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//CRUD
export const createOrder = async (req: Request, res: Response) => {
  try {
    const validatedData = createOrderSchema.parse(req.body);
    const idUser = "1896d6fb-feee-4a4f-818f-1cf28c0c7a52";

    const order = await orderService.create(idUser, validatedData);
    res.status(201).json(order);
  } catch (error) {
    console.error("Error in createOrder:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateOrderStatus = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id || typeof id !== "string") {
    return res.status(400).json({ message: "Invalid order ID" });
  }

  const validatedData = updateOrderStatusSchema.parse(req.body);

  const order = await orderService.updateStatus(id, validatedData.status);
  res.status(200).json(order);
};

export const updateOrderPayment = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id || typeof id !== "string") {
    return res.status(400).json({ message: "Invalid order ID" });
  }

  const validatedData = updatePaymentStatusSchema.parse(req.body);

  const order = await orderService.updatePayment(id, validatedData.status);
  res.status(200).json(order);
};
