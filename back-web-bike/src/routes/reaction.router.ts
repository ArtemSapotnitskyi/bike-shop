import { Router } from "express";
import {
  getPublicComments,
  toggleLike,
  getAdminAllComments,
  createComment,
  updateComment,
  deleteAnyComment,
  removeComment,
} from "../controllers/reaction.controller.js";

const routerPublicReaction = Router();
const routerAdminReaction = Router();

//Public
routerPublicReaction.get("/:id", getPublicComments);
routerPublicReaction.post("/:id", toggleLike);

//Admin
routerAdminReaction.get("/", getAdminAllComments);
routerAdminReaction.delete("/:id", removeComment);

//CRUD
routerPublicReaction.post("/", createComment);
routerPublicReaction.patch("/:id", updateComment);
routerPublicReaction.delete("/:id", deleteAnyComment);

export { routerPublicReaction, routerAdminReaction };
