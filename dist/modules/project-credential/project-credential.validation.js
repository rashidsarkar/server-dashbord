"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const createProjectCredentialSchema = zod_1.z.object({
    email: zod_1.z.string().email("Invalid email address"),
    password: zod_1.z.string().min(6, "Password must be at least 6 characters"),
    projectId: zod_1.z.string().uuid("Invalid project ID"),
}).strict();
const updateProjectCredentialSchema = zod_1.z.object({
    email: zod_1.z.string().email("Invalid email address").optional(),
    password: zod_1.z.string().min(6, "Password must be at least 6 characters").optional(),
    projectId: zod_1.z.string().uuid("Invalid project ID").optional(),
}).strict();
const projectCredentialValidation = {
    createProjectCredentialSchema,
    updateProjectCredentialSchema,
};
exports.default = projectCredentialValidation;
