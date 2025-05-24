"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const createBlogSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(1, "Title is required"),
        image: zod_1.z.string().min(1, "Image URL is required"),
        excerpt: zod_1.z.string().min(1, "Excerpt is required"),
        content: zod_1.z.string().min(1, "Content is required"),
    }),
});
const updateBlogSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, "Title is required").optional(),
    image: zod_1.z.string().min(1, "Image URL is required").optional(),
    excerpt: zod_1.z.string().min(1, "Excerpt is required").optional(),
    content: zod_1.z.string().min(1, "Content is required").optional(),
    authorId: zod_1.z.string().uuid("Invalid author ID").optional(),
});
const blogValidation = {
    createBlogSchema,
    updateBlogSchema,
};
exports.default = blogValidation;
