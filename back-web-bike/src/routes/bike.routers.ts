import { Router } from "express";
import {
  getPublicCatalog,
  getPublicBikeById,
  getAdminAllBikes,
  getAdminBikeById,
  createBike,
  updateBike,
  removeBike,
} from "../controllers/bike.controller.js";

const routerPublicBike = Router();
const routerAdminBike = Router();

//Public
routerPublicBike.get("/", getPublicCatalog);
routerPublicBike.get("/:id", getPublicBikeById);

//Admin
routerAdminBike.get("/", getAdminAllBikes);
routerAdminBike.get("/:id", getAdminBikeById);

//CRUD
routerAdminBike.post("/", createBike);
routerAdminBike.patch("/:id", updateBike);
routerAdminBike.delete("/:id", removeBike);

export { routerPublicBike, routerAdminBike };
