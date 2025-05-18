import { z } from "zod";

const createUserSchema = z.object({
  email: z.string().email("Invalid email address"),
  name: z.string().min(1, "Name is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.enum(["USER", "ADMIN"]).optional(),
}).strict();

const updateUserSchema = z.object({
  email: z.string().email("Invalid email address").optional(),
  name: z.string().min(1, "Name is required").optional(),
  password: z.string().min(6, "Password must be at least 6 characters").optional(),
  role: z.enum(["USER", "ADMIN"]).optional(),
}).strict();

const userValidation = {
  createUserSchema,
  updateUserSchema,
};

export default userValidation; 