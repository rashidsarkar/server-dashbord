import { z } from "zod";

const createProjectCredentialSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  projectId: z.string().uuid("Invalid project ID"),
}).strict();

const updateProjectCredentialSchema = z.object({
  email: z.string().email("Invalid email address").optional(),
  password: z.string().min(6, "Password must be at least 6 characters").optional(),
  projectId: z.string().uuid("Invalid project ID").optional(),
}).strict();

const projectCredentialValidation = {
  createProjectCredentialSchema,
  updateProjectCredentialSchema,
};

export default projectCredentialValidation; 