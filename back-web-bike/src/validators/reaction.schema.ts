import { z } from "zod";

export const createCommentSchema = z.object({
  inputComment: z.string().min(3, "Comment must contain at least 3 characters"),
  idBike: z.uuid("Invalid bike ID"),
  idBikeInfo: z.uuid("Invalid bike info ID"),
  parentId: z.uuid("Invalid parent ID"),
});

export const updateCommentSchema = z.object({
  inputComment: z.string().min(3, "Comment must contain at least 3 characters"),
});
