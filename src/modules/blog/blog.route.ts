import express from "express";
import { blogController } from "./blog.controller";
import validateRequest from "../../middlewares/validatedRequest";
import blogValidation from "./blog.validation";
import auth from "../../middlewares/auth";

const router = express.Router();

router.get("/", blogController.getAllBlogFromDb);
router.get("/:id", blogController.getBlogById);
router.post(
  "/create-blog",
  auth(),
  validateRequest(blogValidation.createBlogSchema),
  blogController.createBlog
);
router.patch(
  "/:id",
  auth(),
  validateRequest(blogValidation.updateBlogSchema),
  blogController.updateBlog
);
router.delete("/:id", auth(), blogController.deleteBlog);

export const blogRouter = router;
