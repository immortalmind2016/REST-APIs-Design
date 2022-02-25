import { Router } from "express";
import postsController from "../controller/posts.controller";

const router = Router();
const options = ["GET", "POST", "DELETE"];

router.get("/", postsController.list);
router.get("/:postId", postsController.findOne);
router.options("/", (_, res) => res.json(options));
router.delete("/:postId", postsController.deleteOne);
router.post("/", postsController.create);
router.put("/:postId", postsController.update);

export default router;
