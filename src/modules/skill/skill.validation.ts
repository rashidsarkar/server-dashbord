import { z } from "zod";

const createSkillSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Name is required"),
    category: z.enum(["FRONTEND", "BACKEND", "DATABASE", "TOOLS"]),
  }),
});
const updateSkillSchema = z.object({
  name: z.string().min(1, "Name is required").optional(),
  category: z.enum(["FRONTEND", "BACKEND", "DATABASE", "TOOLS"]).optional(),
});

const skillValidation = {
  createSkillSchema,
  updateSkillSchema,
};

export default skillValidation;
