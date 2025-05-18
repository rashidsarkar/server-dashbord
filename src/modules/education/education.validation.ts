import { z } from "zod";

const createEducationSchema = z.object({
  degree: z.string().min(1, "Degree is required"),
  institution: z.string().min(1, "Institution is required"),
  year: z.string().min(1, "Year is required"),
  aboutId: z.string().uuid("Invalid about ID"),
}).strict();

const updateEducationSchema = z.object({
  degree: z.string().min(1, "Degree is required").optional(),
  institution: z.string().min(1, "Institution is required").optional(),
  year: z.string().min(1, "Year is required").optional(),
  aboutId: z.string().uuid("Invalid about ID").optional(),
}).strict();

const educationValidation = {
  createEducationSchema,
  updateEducationSchema,
};

export default educationValidation; 