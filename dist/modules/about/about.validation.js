"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const createAboutSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, "Name is required"),
        role: zod_1.z.string().min(1, "Role is required"),
        bio: zod_1.z.string().min(1, "Bio is required"),
        experience: zod_1.z.string().min(1, "Experience is required"),
        location: zod_1.z.string().min(1, "Location is required"),
        email: zod_1.z.string().email("Invalid email address"),
        education: zod_1.z.string().min(1, "Education is required"),
    })
});
const updateAboutSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "Name is required").optional(),
    role: zod_1.z.string().min(1, "Role is required").optional(),
    bio: zod_1.z.string().min(1, "Bio is required").optional(),
    experience: zod_1.z.string().min(1, "Experience is required").optional(),
    location: zod_1.z.string().min(1, "Location is required").optional(),
    email: zod_1.z.string().email("Invalid email address").optional(),
    interests: zod_1.z.array(zod_1.z.string()).min(1, "At least one interest is required").optional(),
});
const aboutValidation = {
    createAboutSchema,
    updateAboutSchema,
};
exports.default = aboutValidation;
