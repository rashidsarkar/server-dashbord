import { z } from "zod";

const createProjectSchema = z.object({
  body: z.object({
  title: z.string().min(1, "Title is required"),
  image: z.string().url("Invalid image URL"),
  overview: z.string().min(1, "Overview is required"),
  frontendTech: z
    .array(z.string())
    .min(1, "At least one frontend technology is required"),
  backendTech: z
    .array(z.string())
    .min(1, "At least one backend technology is required"),
  databaseTech: z.string().min(1, "Database technology is required"),
  liveDemoLink: z.string().url("Invalid live demo link URL").optional(),
  clientRepoLink: z.string().url("Invalid client repo link URL").optional(),
  serverRepoLink: z.string().url("Invalid server repo link URL"),
})
})

const updateProjectSchema = z.object({
  title: z.string().min(1, "Title is required").optional(),
  image: z.string().url("Invalid image URL").optional(),
  overview: z.string().min(1, "Overview is required").optional(),
  frontendTech: z
    .array(z.string())
    .min(1, "At least one frontend technology is required")
    .optional(),
  backendTech: z
    .array(z.string())
    .min(1, "At least one backend technology is required")
    .optional(),
  databaseTech: z.string().min(1, "Database technology is required").optional(),
  liveDemoLink: z.string().url("Invalid live demo link URL").optional(),
  clientRepoLink: z.string().url("Invalid client repo link URL").optional(),
  serverRepoLink: z.string().url("Invalid server repo link URL").optional(),
});

const projectValidation = {
  createProjectSchema,
  updateProjectSchema,
};

export default projectValidation;
