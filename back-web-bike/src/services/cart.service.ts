import type { Prisma } from "../generated/prisma/client.js";
import prisma from "../lib/prisma.js";

export const getCartById = async (id: string) => {
  return await prisma.cart.findUnique({
    where: { id },
    select: {},
  });
};

export const addToCart = async (idUser: string, idBike: string) => {
  const existingItemInCart = await prisma.cart.findFirst({
    where: {
      idUser,
      idBike,
    },
  });

  if (!existingItemInCart) {
    await prisma.cart;
  }
  return await prisma.cart.findMany({});
};






                                                