import { type Request, type Response } from "express";
import {
  createCommentSchema,
  updateCommentSchema,
} from "../validators/reaction.schema.js";
import * as reactionService from "../services/reaction.service.js";
import { z } from "zod";

//Public
export const getPublicComments = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id || typeof id !== "string") {
      return res.status(400).json({ message: "Invalid or missing bike ID" });
    }
    const comment = await reactionService.getPublicComments(id);
    res.status(200).json(comment);
  } catch (error) {
    console.error("Error in getPublicComments");
    res.status(500).json({ message: "Internal server error" });
  }
};

export const toggleLike = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id || typeof id !== "string") {
      return res.status(400).json({ message: "Invalid or missing comment ID" });
    }
    const idUser = "1896d6fb-feee-4a4f-818f-1cf28c0c7a52";
    const like = await reactionService.toggleLike(idUser, id);
    res.status(200).json(like);
  } catch (error) {
    console.error("Error in toggleLike:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//Admin
export const getAdminAllComments = async (req: Request, res: Response) => {
  try {
    const comment = await reactionService.getAdminAllComments();
    res.status(200).json(comment);
  } catch (error) {
    console.error("Error in getAdminAllComments");
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteAnyComment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id || typeof id !== "string") {
      return res.status(400).json({ message: "Invalid or missing comment ID" });
    }
    const comment = await reactionService.deleteAnyComment(id);
    res.status(200).json(comment);
  } catch (error) {
    console.error("Error in deleteAnyComment");
    res.status(500).json({ message: "Internal server error" });
  }
};

//CRUD
export const createComment = async (req: Request, res: Response) => {
  try {
    const idUser = "1896d6fb-feee-4a4f-818f-1cf28c0c7a52";
    if (!idUser || typeof idUser !== "string") {
      return res.status(400).json({ message: "Invalid or missing user ID" });
    }
    const validatedData = createCommentSchema.parse(req.body);
    const comment = await reactionService.createComment(idUser, validatedData);
    res.status(201).json(comment);
  } catch (error: any) {
    // Повертаємо обробку Zod помилок!
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        message: "Validation error",
        errors: z.treeifyError(error),
      });
    }
    console.error("Error in createComment:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateComment = async (req: Request, res: Response) => {
  try {
    const idUser = "1896d6fb-feee-4a4f-818f-1cf28c0c7a52";
    if (!idUser || typeof idUser !== "string") {
      return res.status(400).json({ message: "Invalid or missing user ID" });
    }
    const { id: idComment } = req.params;
    if (!idComment || typeof idComment !== "string") {
      return res.status(400).json({ message: "Invalid or missing comment ID" });
    }
    const validatedData = updateCommentSchema.parse(req.body);
    const comment = await reactionService.updateComment(
      idUser,
      idComment,
      validatedData,
    );
    res.status(200).json(comment);
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        message: "Validation error",
        errors: z.treeifyError(error),
      });
    }
    if (error.message === "NOT_FOUND")
      return res.status(404).json({ message: "Comment not found" });
    if (error.message === "FORBIDDEN")
      return res
        .status(403)
        .json({ message: "You can only edit your own comments" });

    console.error("Error in updateComment:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const removeComment = async (req: Request, res: Response) => {
  try {
    const idUser = "1896d6fb-feee-4a4f-818f-1cf28c0c7a52";
    if (!idUser || typeof idUser !== "string") {
      return res.status(400).json({ message: "Invalid or missing user ID" });
    }
    const { id: idComment } = req.params; // Виправлено діставання ID!
    if (!idComment || typeof idComment !== "string") {
      return res.status(400).json({ message: "Invalid or missing comment ID" });
    }
    const comment = await reactionService.removeComment(idUser, idComment);
    res.status(200).json(comment);
  } catch (error: any) {
    if (error.message === "NOT_FOUND")
      return res.status(404).json({ message: "Comment not found" });
    if (error.message === "FORBIDDEN")
      return res
        .status(403)
        .json({ message: "You can only delete your own comments" });

    console.error("Error in removeComment:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
