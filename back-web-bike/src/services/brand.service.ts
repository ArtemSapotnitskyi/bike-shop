import prisma from "../lib/prisma.js";
import { Prisma } from "../generated/prisma/client.js";

//Public
export const getPublicBrandsCatalog = async () => {
  return await prisma.brand.findMany({
    select: {
      id: true,
      name: true,
      logo: {
        select: {
          url: true,
        },
      },
    },
    orderBy: { name: "asc" },
  });
};

export const getPublicBrandById = async (id: string) => {
  return await prisma.brand.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      logo: {
        select: {
          url: true,
        },
      },
    },
  });
};

//Admin
export const getAdminAllBrands = async () => {
  return await prisma.brand.findMany({
    select: {
      id: true,
      name: true,
      logo: {
        select: {
          url: true,
        },
      },
      _count: {
        select: {
          bikeInfos: true,
        },
      },
    },

    orderBy: { createAt: "desc" },
  });
};

export const getAdminBrandById = async (id: string) => {
  return await prisma.brand.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      logo: {
        select: {
          url: true,
        },
      },
    },
  });
};

//CRUD
export const createBrand = async (data: Prisma.BrandCreateInput) => {
  return await prisma.brand.create({
    data,
  });
};

export const updateBrand = async (
  id: string,
  data: Prisma.BrandUpdateInput,
) => {
  return await prisma.brand.update({
    where: { id },
    data,
  });
};

export const removeBrand = async (id: string) => {
  return await prisma.brand.delete({
    where: { id },
  });
};
