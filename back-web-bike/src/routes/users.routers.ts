import { Router } from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  removeUser,
} from "../controllers/user.controller.js";

const router = Router();

//Public
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.patch("/:id", updateUser);
router.delete("/:id", removeUser);

export default router;
