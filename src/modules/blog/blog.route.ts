import express from "express";
import { blogController } from "./blog.controller";
import validateRequest from "../../middlewares/validatedRequest";
import blogValidation from "./blog.validation";

const router = express.Router();

router.get("/", blogController.getAllBlogFromDb);
router.get("/:id", blogController.getBlogById);
router.post(
  "/create-blog",
  validateRequest(blogValidation.createBlogSchema),
  blogController.createBlog
);
router.patch(
  "/:id",
  validateRequest(blogValidation.updateBlogSchema),
  blogController.updateBlog
);
router.delete("/:id", blogController.deleteBlog);

export const blogRouter = router;
