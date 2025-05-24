"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const createProjectFeatureSchema = zod_1.z.object({
    icon: zod_1.z.string().min(1, "Icon is required"),
    label: zod_1.z.string().min(1, "Label is required"),
    gradient: zod_1.z.string().min(1, "Gradient is required"),
    projectId: zod_1.z.string().uuid("Invalid project ID"),
}).strict();
const updateProjectFeatureSchema = zod_1.z.object({
    icon: zod_1.z.string().min(1, "Icon is required").optional(),
    label: zod_1.z.string().min(1, "Label is required").optional(),
    gradient: zod_1.z.string().min(1, "Gradient is required").optional(),
    projectId: zod_1.z.string().uuid("Invalid project ID").optional(),
}).strict();
const projectFeatureValidation = {
    createProjectFeatureSchema,
    updateProjectFeatureSchema,
};
exports.default = projectFeatureValidation;
