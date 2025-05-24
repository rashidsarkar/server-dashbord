"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const createSkillCategorySchema = zod_1.z.object({
    title: zod_1.z.string().min(1, "Title is required"),
    description: zod_1.z.string().min(1, "Description is required"),
}).strict();
const updateSkillCategorySchema = zod_1.z.object({
    title: zod_1.z.string().min(1, "Title is required").optional(),
    description: zod_1.z.string().min(1, "Description is required").optional(),
}).strict();
const skillCategoryValidation = {
    createSkillCategorySchema,
    updateSkillCategorySchema,
};
exports.default = skillCategoryValidation;
