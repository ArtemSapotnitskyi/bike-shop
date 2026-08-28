import type { Prisma } from "../generated/prisma/client.js";
import prisma from "../lib/prisma.js";
import bcrypt from "bcrypt";

export const getAll = async () => {
  return await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      surname: true,
      email: true,
      role: true,
      createAt: true,
    },
  });
};

export const getById = async (id: string) => {
  return await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      surname: true,
      email: true,
      role: true,
      createAt: true,
      cart: {
        select: {
          id: true,
        },
      },
    },
  });
};

//CRUD
export const create = async (data: Prisma.UserCreateInput) => {
  const saltRounds = 10;

  const hashedPassword = await bcrypt.hash(data.password, saltRounds);

  return await prisma.user.create({
    data: {
      ...data,
      password: hashedPassword,
      cart: {
        create: {},
      },
    },
    select: {
      id: true,
      name: true,
      surname: true,
      email: true,
      role: true,
      cart: true,
    },
  });
};

export const update = async (id: string, data: Prisma.UserUpdateInput) => {
  return await prisma.user.update({
    where: { id },
    data,
    select: {
      id: true,
      name: true,
      surname: true,
      email: true,
    },
  });
};

export const remove = async (id: string) => {
  return await prisma.user.delete({
    where: { id },
  });
};
