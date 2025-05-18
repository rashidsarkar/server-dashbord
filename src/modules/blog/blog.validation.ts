import { z } from "zod";

const createBlogSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Title is required"),
    image: z.string().min(1, "Image URL is required"),
    excerpt: z.string().min(1, "Excerpt is required"),
    content: z.string().min(1, "Content is required"),
  }),
});
const updateBlogSchema = z.object({
  title: z.string().min(1, "Title is required").optional(),
  image: z.string().min(1, "Image URL is required").optional(),
  excerpt: z.string().min(1, "Excerpt is required").optional(),
  content: z.string().min(1, "Content is required").optional(),
  authorId: z.string().uuid("Invalid author ID").optional(),
});
const blogValidation = {
  createBlogSchema,
  updateBlogSchema,
};

export default blogValidation;
