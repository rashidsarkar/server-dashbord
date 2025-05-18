import { z } from "zod";

const createSkillSchema = z.object({
  name: z.string().min(1, "Name is required"),
  categoryId: z.string().uuid("Invalid category ID"),
}).strict();

const updateSkillSchema = z.object({
  name: z.string().min(1, "Name is required").optional(),
  categoryId: z.string().uuid("Invalid category ID").optional(),
}).strict();

const skillValidation = {
  createSkillSchema,
  updateSkillSchema,
};

export default skillValidation; 