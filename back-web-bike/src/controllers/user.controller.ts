import { type Request, type Response } from "express";
import * as usersService from "../services/user.service.js";
import {
  createUserSchema,
  updateUserSchema,
} from "../validators/user.schema.js";
import type { Prisma } from "../generated/prisma/client.js";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await usersService.getAll();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error in getAllUsers:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id || typeof id !== "string") {
      return res.status(400).json({ message: "Invalid or missing user ID" });
    }

    const user = await usersService.getById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error in getUserById:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    //Validated data
    const validatedData = createUserSchema.parse(req.body);
    const newUser = await usersService.create(validatedData);
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error in createUser:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id || typeof id !== "string") {
      return res.status(400).json({ message: "Invalid or missing user ID" });
    }

    const validatedData = updateUserSchema.parse(
      req.body,
    ) as Prisma.UserUpdateInput;

    if (Object.keys(validatedData).length === 0) {
      return res.status(400).json({ message: "No data provided to update" });
    }
    const updatedUser = await usersService.update(id, validatedData);
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error in updateUser:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const removeUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id || typeof id !== "string") {
      return res.status(400).json({ message: "Invalid or missing user ID" });
    }

    await usersService.remove(id);
    res.status(200).json({ message: "User successfully deleted" });
  } catch (error) {
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      error.code === "P2025"
    ) {
      return res.status(404).json({ message: "User not found" });
    }

    console.error("Error in deleteUser:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
