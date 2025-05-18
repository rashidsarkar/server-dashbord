import { z } from "zod";

const createSkillCategorySchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
}).strict();

const updateSkillCategorySchema = z.object({
  title: z.string().min(1, "Title is required").optional(),
  description: z.string().min(1, "Description is required").optional(),
}).strict();

const skillCategoryValidation = {
  createSkillCategorySchema,
  updateSkillCategorySchema,
};

export default skillCategoryValidation; 