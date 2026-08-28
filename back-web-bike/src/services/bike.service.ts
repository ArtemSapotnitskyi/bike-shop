import { Prisma } from "../generated/prisma/client.js";
import prisma from "../lib/prisma.js";

export const getPublicCatalog = async () => {
  return await prisma.bike.findMany({
    select: {
      id: true,
      name: true,
      subtitle: true,
      cover: {
        select: { url: true },
      },
      bikeInfos: {
        select: {
          colorHex: true,
          price: true,
          stock: true,
        },
      },
    },
  });
};

export const getPublicBikeById = async (id: string) => {
  return await prisma.bike.findUnique({
    where: { id },
    include: {
      cover: true,
      images: {
        include: { file: true },
        orderBy: { sortOrder: "asc" },
      },
      bikeInfos: {
        include: {
          brands: true,
          types: true,
        },
      },
      specifications: true,
    },
  });
};

export const getAdminAllBikes = async () => {
  return await prisma.bike.findMany({
    include: {
      bikeInfos: true,
      cover: true,
      _count: {
        select: {
          orderItems: true,
          comments: true,
        },
      },
    },
    orderBy: { createAt: "desc" },
  });
};

export const getAdminBikeById = async (id: string) => {
  return await prisma.bike.findUnique({
    where: { id },
    include: {
      bikeInfos: true,
      images: true,
      specifications: true,
    },
  });
};

export const create = async (data: Prisma.BikeCreateInput) => {
  return await prisma.bike.create({
    data,
  });
};

export const update = async (id: string, data: Prisma.BikeUpdateInput) => {
  return await prisma.bike.update({
    where: { id },
    data,
  });
};

export const remove = async (id: string) => {
  return await prisma.bike.delete({ where: { id } });
};
