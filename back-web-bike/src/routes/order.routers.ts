import { Router } from "express";
import {
  getPublicOrders,
  getPublicOrderById,
  getAdminAllOrders,
  getAdminOrderById,
  createOrder,
  updateOrderStatus,
  updateOrderPayment,
} from "../controllers/order.controller.js";

const routerPublic = Router();
const routerAdmin = Router();

//Public
routerPublic.get("/", getPublicOrders);
routerPublic.get("/:id", getPublicOrderById);

//Admin
routerAdmin.get("/", getAdminAllOrders);
routerAdmin.get("/:id", getAdminOrderById);

//CRUD
routerAdmin.post("/", createOrder);
routerAdmin.patch("/:id", updateOrderPayment);
routerAdmin.delete("/:id", updateOrderStatus);

export { routerPublic, routerAdmin };
