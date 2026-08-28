import prisma from "../lib/prisma.js";
import { Prisma } from "../generated/prisma/client.js";

//Public
export const getPublicTypeCatalog = async () => {
  return await prisma.type.findMany({
    select: {
      id: true,
      name: true,
      file: {
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
  });
};

export const getPublicTypeById = async (id: string) => {
  return await prisma.type.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      file: {
        select: {
          url: true,
        },
      },
    },
  });
};

//Admin
export const getAdminTypeCatalog = async () => {
  return await prisma.type.findMany({
    select: {
      id: true,
      name: true,
      file: {
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
  });
};

export const getAdminTypeById = async (id: string) => {
  return await prisma.type.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      file: {
        select: {
          url: true,
        },
      },
    },
  });
};

//CRUD
export const createType = async (data: Prisma.TypeCreateInput) => {
  return await prisma.type.create({
    data,
  });
};

export const updateType = async (id: string, data: Prisma.TypeUpdateInput) => {
  return await prisma.type.update({
    where: { id },
    data,
  });
};

export const removeType = async (id: string) => {
  return await prisma.type.delete({
    where: { id },
  });
};
