import { type Request, type Response } from "express";
import * as brandService from "../services/brand.service.js";
import {
  createBrandSchema,
  updateBrandSchema,
} from "../validators/brand.schema.js";
import { Prisma } from "../generated/prisma/client.js";
import { z } from "zod";

//Public
export const getPublicBrandsCatalog = async (req: Request, res: Response) => {
  try {
    const brand = await brandService.getPublicBrandsCatalog();
    res.status(200).json(brand);
  } catch (error) {
    console.error("Error in getPublicBrandsCatalog");
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getPublicBrandById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id || typeof id !== "string") {
      return res.status(400).json({ message: "Invalid or missing brand ID" });
    }
    const brand = await brandService.getPublicBrandById(id);
    if (!brand) {
      return res.status(404).json({ message: "Bike not found" });
    }
    res.status(200).json(brand);
  } catch (error) {
    console.error("Error in getPublicBrandById:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//Admin
export const getAdminAllBrands = async (req: Request, res: Response) => {
  try {
    const brand = await brandService.getAdminAllBrands();
    res.status(200).json(brand);
  } catch (error) {
    console.error("Error in getAdminAllBrands:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getAdminBrandById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id || typeof id !== "string") {
      return res.status(400).json({ message: "Invalid or missing brand ID" });
    }
    const brand = await brandService.getAdminBrandById(id);
    if (!brand) {
      return res.status(404).json("Brand not found");
    }
    res.status(200).json(brand);
  } catch (error) {
    console.error("Error in getAdminBrandById:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//CRUD
export const createBrand = async (req: Request, res: Response) => {
  try {
    const validatedData = createBrandSchema.parse(req.body);
    const brand = await brandService.createBrand(validatedData);
    res.status(201).json(brand);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        message: "Validation error",
        errors: z.treeifyError(error),
      });
    }

    console.error("Error in createBrand:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateBrand = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id || typeof id !== "string") {
      return res.status(400).json({ message: "Invalid or missing brand ID" });
    }
    const validatedData = updateBrandSchema.parse(
      req.body,
    ) as Prisma.BrandUpdateInput;
    if (Object.keys(validatedData).length === 0) {
      return res.status(400).json({ message: "No data provided to update" });
    }

    const brand = await brandService.updateBrand(id, validatedData);
    res.status(200).json(brand);
  } catch (error) {
    //Check Validator
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        message: "Validation error",
        errors: z.treeifyError(error),
      });
    }
    console.error("Error in updateBrand:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const removeBrand = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id || typeof id !== "string") {
      return res.status(400).json({ message: "Invalid or missing brand ID" });
    }
    await brandService.removeBrand(id);
    res.status(200).json({ message: "Brand successfully deleted" });
  } catch (error) {
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      error.code === "P2025"
    ) {
      return res.status(404).json({ message: "Brand not found" });
    }

    console.error("Error in removeBrand:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
