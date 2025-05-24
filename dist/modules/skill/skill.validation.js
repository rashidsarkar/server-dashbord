"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const createSkillSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, "Name is required"),
        category: zod_1.z.enum(["FRONTEND", "BACKEND", "DATABASE", "TOOLS"]),
    }),
});
const updateSkillSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "Name is required").optional(),
    category: zod_1.z.enum(["FRONTEND", "BACKEND", "DATABASE", "TOOLS"]).optional(),
});
const skillValidation = {
    createSkillSchema,
    updateSkillSchema,
};
exports.default = skillValidation;
