import { type Request, type Response } from "express";
import * as bikeService from "../services/bike.service.js";
import {
  createBikeSchema,
  updateBikeSchema,
} from "../validators/bike.schema.js";
import type { Prisma } from "../generated/prisma/client.js";
import { z } from "zod";

//Public
export const getPublicCatalog = async (req: Request, res: Response) => {
  try {
    const bikes = await bikeService.getPublicCatalog();
    res.status(200).json(bikes);
  } catch (error) {
    console.error("Error in getPublicCatalog:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getPublicBikeById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id || typeof id !== "string") {
      return res.status(400).json({ message: "Invalid or missing bike ID" });
    }

    const bike = await bikeService.getPublicBikeById(id);

    if (!bike) {
      return res.status(404).json({ message: "Bike not found" });
    }

    res.status(200).json(bike);
  } catch (error) {
    console.error("Error in getPublicBikeById:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//Admin
export const getAdminAllBikes = async (req: Request, res: Response) => {
  try {
    const bikes = await bikeService.getAdminAllBikes();
    res.status(200).json(bikes);
  } catch (error) {
    console.error("Error in getAdminAllBikes:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getAdminBikeById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id || typeof id !== "string") {
      return res.status(400).json({ message: "Invalid or missing bike ID" });
    }

    const bike = await bikeService.getAdminBikeById(id);

    if (!bike) {
      return res.status(404).json({ message: "Bike not found" });
    }

    res.status(200).json(bike);
  } catch (error) {
    console.error("Error in getAdminBikeById:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//CRUD
export const createBike = async (req: Request, res: Response) => {
  try {
    const validatedData = createBikeSchema.parse(req.body);

    const prismaData: Prisma.BikeCreateInput = {
      name: validatedData.name,
      subtitle: validatedData.subtitle ?? null,
      bikeInfos: {
        create: validatedData.variants.map((variant) => ({
          description: variant.description,
          color: variant.color,
          colorHex: variant.colorHex ?? null,
          price: variant.price,
          stock: variant.stock,
          brands: {
            connect: { id: variant.idBrand },
          },
          types: {
            connect: { id: variant.idType },
          },
        })),
      },
      ...(validatedData.specifications &&
        validatedData.specifications.length > 0 && {
          specifications: {
            create: validatedData.specifications.map((spec) => ({
              title: spec.title,
              value: spec.value,
              unit: spec.unit,
            })),
          },
        }),
    };

    const newBike = await bikeService.create(
      prismaData as Prisma.BikeCreateInput,
    );

    res.status(201).json(newBike);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        message: "Validation error",
        errors: z.treeifyError(error),
      });
    }

    console.error("Error in createBike:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateBike = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id || typeof id !== "string") {
      return res.status(400).json({ message: "Invalid or missing bike ID" });
    }

    const validatedData = updateBikeSchema.parse(
      req.body,
    ) as Prisma.BikeUpdateInput;
    if (Object.keys(validatedData).length === 0) {
      return res.status(400).json({ message: "No data provided to update" });
    }

    const updateBike = await bikeService.update(id, validatedData);
    res.status(200).json(updateBike);
  } catch (error) {
    console.error("Error in updateBike:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const removeBike = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id || typeof id !== "string") {
      return res.status(400).json({ message: "Invalid or missing bike ID" });
    }

    await bikeService.remove(id);
    res.status(200).json({ message: "Bike successfully deleted" });
  } catch (error) {
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      error.code === "P2025"
    ) {
      return res.status(404).json({ message: "Bike not found" });
    }

    console.error("Error in removeBike:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
