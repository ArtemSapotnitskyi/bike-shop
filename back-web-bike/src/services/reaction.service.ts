import prisma from "../lib/prisma.js";

//Public
export const getPublicComments = async (idBike: string) => {
  return await prisma.comment.findMany({
    where: { idBike, parentId: null },
    select: {
      id: true,
      inputComment: true,
      users: {
        select: {
          name: true,
        },
      },
      replies: {
        select: {
          id: true,
          inputComment: true,
          createAt: true,
          users: {
            select: {
              name: true,
            },
          },
        },
        orderBy: { createAt: "asc" }, //From odl comments to new
      },
      createAt: true,
      _count: {
        select: {
          favoriteComments: true,
        },
      },
    },
    orderBy: { createAt: "desc" },
  });
};

export const toggleLike = async (idUser: string, idComment: string) => {
  //Check whether the user has already liked this comment
  const existingLike = await prisma.favoriteComment.findFirst({
    where: {
      idUser,
      idComment,
    },
  });

  //If like has already liked. Deleted it(A user withdrew their like)
  if (existingLike) {
    await prisma.favoriteComment.delete({
      where: { id: existingLike.id },
    });
    return { liked: false };
  }

  //If there is no Like, create one (the user liked it)
  await prisma.favoriteComment.create({
    data: {
      idUser,
      idComment,
    },
  });
  //Return status
  return { liked: true };
};

//Admin
export const getAdminAllComments = async () => {
  return await prisma.comment.findMany({
    select: {
      id: true,
      inputComment: true,
      users: {
        select: {
          name: true,
        },
      },
      idBike: true,
      createAt: true,
    },
    orderBy: { createAt: "desc" },
  });
};

export const deleteAnyComment = async (idComment: string) => {
  return await prisma.comment.delete({
    where: { id: idComment },
  });
};

//CRUD
export const createComment = async (
  idUser: string,
  data: {
    inputComment: string;
    idBike: string;
    idBikeInfo: string;
    parentId?: string;
  },
) => {
  return await prisma.comment.create({
    data: {
      idUser: idUser,
      inputComment: data.inputComment,
      idBike: data.idBike,
      idBikeInfo: data.idBikeInfo,
      parentId: data.parentId ?? null, // That operator didn't change “” to null. It's still “”, but to TypeScript, it will appear as null.
    },
  });
};

export const updateComment = async (
  idUser: string,
  idComment: string,
  data: { inputComment: string },
) => {
  //Search comment in DB
  const existingComment = await prisma.comment.findUnique({
    where: { id: idComment },
  });

  //Error handling (In DB And FORBIDDEN)
  if (!existingComment) throw new Error("NOT_FOUND");
  if (existingComment.idUser !== idUser) throw new Error("FORBIDDEN");

  //Updating
  return await prisma.comment.update({
    where: { id: idComment },
    data: {
      inputComment: data.inputComment,
    },
  });
};

export const removeComment = async (idUser: string, idComment: string) => {
  //Search comment in DB
  const existingComment = await prisma.comment.findUnique({
    where: { id: idComment },
  });

  //Error handling (In DB And FORBIDDEN)
  if (!existingComment) throw new Error("NOT_FOUND");
  if (existingComment.idUser !== idUser) throw new Error("FORBIDDEN");

  //Updating
  return await prisma.comment.delete({
    where: {
      id: idComment,
    },
  });
};
