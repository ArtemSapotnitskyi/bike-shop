import { Router } from "express";
import {
  getPublicTypeCatalog,
  getPublicTypeById,
  getAdminTypeCatalog,
  getAdminTypeById,
  createType,
  updateType,
  removeType,
} from "../controllers/type.controller.js";

const routerPublicType = Router();
const routerAdminType = Router();

//Public
routerPublicType.get("/", getPublicTypeCatalog);
routerPublicType.get("/:id", getPublicTypeById);

//Admin
routerAdminType.get("/", getAdminTypeCatalog);
routerAdminType.get("/:id", getAdminTypeById);

//CRUD
routerAdminType.post("/", createType);
routerAdminType.patch("/:id", updateType);
routerAdminType.delete("/:id", removeType);

export { routerPublicType, routerAdminType };
