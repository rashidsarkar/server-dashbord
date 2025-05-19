import { z } from "zod";

const createAboutSchema = z.object({
  body: z.object({
  name: z.string().min(1, "Name is required"),
  role: z.string().min(1, "Role is required"),
  bio: z.string().min(1, "Bio is required"),
  experience: z.string().min(1, "Experience is required"),
  location: z.string().min(1, "Location is required"),
  email: z.string().email("Invalid email address"),
  education: z.string().min(1, "Education is required"),
})
});

const updateAboutSchema = z.object({
  name: z.string().min(1, "Name is required").optional(),
  role: z.string().min(1, "Role is required").optional(),
  bio: z.string().min(1, "Bio is required").optional(),
  experience: z.string().min(1, "Experience is required").optional(),
  location: z.string().min(1, "Location is required").optional(),
  email: z.string().email("Invalid email address").optional(),
  interests: z.array(z.string()).min(1, "At least one interest is required").optional(),
});

const aboutValidation = {
  createAboutSchema,
  updateAboutSchema,
};

export default aboutValidation; 