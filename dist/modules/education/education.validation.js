"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const createEducationSchema = zod_1.z.object({
    degree: zod_1.z.string().min(1, "Degree is required"),
    institution: zod_1.z.string().min(1, "Institution is required"),
    year: zod_1.z.string().min(1, "Year is required"),
    aboutId: zod_1.z.string().uuid("Invalid about ID"),
}).strict();
const updateEducationSchema = zod_1.z.object({
    degree: zod_1.z.string().min(1, "Degree is required").optional(),
    institution: zod_1.z.string().min(1, "Institution is required").optional(),
    year: zod_1.z.string().min(1, "Year is required").optional(),
    aboutId: zod_1.z.string().uuid("Invalid about ID").optional(),
}).strict();
const educationValidation = {
    createEducationSchema,
    updateEducationSchema,
};
exports.default = educationValidation;
