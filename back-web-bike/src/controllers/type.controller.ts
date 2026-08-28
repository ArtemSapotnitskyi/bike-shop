import { type Request, type Response } from "express";
import {
  createTypeSchema,
  updateTypeSchema,
} from "../validators/type.schema.js";
import * as typeService from "../services/type.service.js";
import { Prisma } from "../generated/prisma/client.js";
import { z } from "zod";

//Public
export const getPublicTypeCatalog = async (req: Request, res: Response) => {
  try {
    const typeItems = await typeService.getPublicTypeCatalog();
    res.status(200).json(typeItems);
  } catch (error) {
    console.error("Error in getPublicTypeCatalog");
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getPublicTypeById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id || typeof id !== "string") {
      return res.status(400).json({ message: "Invalid or missing type ID" });
    }
    const typeItems = await typeService.getPublicTypeById(id);
    if (!typeItems) {
      return res.status(404).json({ message: "Type not found" });
    }
    res.status(200).json(typeItems);
  } catch (error) {
    console.error("Error in getPublicTypeById");
    res.status(500).json({ message: "Internal server error" });
  }
};

//Admin
export const getAdminTypeCatalog = async (req: Request, res: Response) => {
  try {
    const typeItems = await typeService.getAdminTypeCatalog();
    res.status(200).json(typeItems);
  } catch (error) {
    console.error("Error in getAdminTypeCatalog");
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getAdminTypeById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id || typeof id !== "string") {
      return res.status(400).json({ message: "Invalid or missing type ID" });
    }
    const typeItems = await typeService.getAdminTypeById(id);
    if (!typeItems) {
      res.status(404).json({ message: "Type not found" });
    }
    res.status(200).json(typeItems);
  } catch (error) {
    console.error("Error in getAdminTypeById");
    res.status(500).json({ message: "Internal server error" });
  }
};

//CRUD
export const createType = async (req: Request, res: Response) => {
  try {
    const validatedData = createTypeSchema.parse(req.body);
    const typeItems = await typeService.createType(validatedData);
    res.status(201).json(typeItems);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        message: "Validation error",
        errors: z.treeifyError(error),
      });
    }

    console.error("Error in createType:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateType = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id || typeof id !== "string") {
      return res.status(400).json({ message: "Invalid or missing type ID" });
    }
    const validatedData = updateTypeSchema.parse(
      req.body,
    ) as Prisma.TypeUpdateInput;
    if (Object.keys(validatedData).length === 0) {
      return res.status(400).json({ message: "No data provided to update" });
    }
    const typeItems = await typeService.updateType(id, validatedData);
    res.status(200).json(typeItems);
  } catch (error) {
    //Check Validator
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        message: "Validation error",
        errors: z.treeifyError(error),
      });
    }
    console.error("Error in updateType:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const removeType = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id || typeof id !== "string") {
      return res.status(400).json({ message: "Invalid or missing type ID" });
    }
    const typeItems = await typeService.removeType(id);
    res.status(200).json(typeItems);
  } catch (error) {
    console.error("Error in removeType:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
