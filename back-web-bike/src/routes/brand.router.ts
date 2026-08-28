import { Router } from "express";
import {
  getPublicBrandsCatalog,
  getPublicBrandById,
  getAdminAllBrands,
  getAdminBrandById,
  createBrand,
  updateBrand,
  removeBrand,
} from "../controllers/brand.controller.js";

const routerPublicBrand = Router();
const routerAdminBrand = Router();

//Public
routerPublicBrand.get("/", getPublicBrandsCatalog);
routerPublicBrand.get("/:id", getPublicBrandById);

//Admin
routerAdminBrand.get("/", getAdminAllBrands);
routerAdminBrand.get("/:id", getAdminBrandById);

//CRUD
routerAdminBrand.post("/", createBrand);
routerAdminBrand.patch("/:id", updateBrand);
routerAdminBrand.delete("/:id", removeBrand);

export { routerPublicBrand, routerAdminBrand };
