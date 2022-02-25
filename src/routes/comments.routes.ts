import { Router } from "express";
import commentsController from "../controller/comments.controller";

const router = Router();

router.get("/", commentsController.list);

export default router;
