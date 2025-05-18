import { z } from "zod";

const createProjectFeatureSchema = z.object({
  icon: z.string().min(1, "Icon is required"),
  label: z.string().min(1, "Label is required"),
  gradient: z.string().min(1, "Gradient is required"),
  projectId: z.string().uuid("Invalid project ID"),
}).strict();

const updateProjectFeatureSchema = z.object({
  icon: z.string().min(1, "Icon is required").optional(),
  label: z.string().min(1, "Label is required").optional(),
  gradient: z.string().min(1, "Gradient is required").optional(),
  projectId: z.string().uuid("Invalid project ID").optional(),
}).strict();

const projectFeatureValidation = {
  createProjectFeatureSchema,
  updateProjectFeatureSchema,
};

export default projectFeatureValidation; 