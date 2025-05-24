"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const createProjectSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(1, "Title is required"),
        image: zod_1.z.string().url("Invalid image URL"),
        overview: zod_1.z.string().min(1, "Overview is required"),
        frontendTech: zod_1.z
            .array(zod_1.z.string())
            .min(1, "At least one frontend technology is required"),
        backendTech: zod_1.z
            .array(zod_1.z.string())
            .min(1, "At least one backend technology is required"),
        databaseTech: zod_1.z.string().min(1, "Database technology is required"),
        liveDemoLink: zod_1.z.string().url("Invalid live demo link URL").optional(),
        clientRepoLink: zod_1.z.string().url("Invalid client repo link URL").optional(),
        serverRepoLink: zod_1.z.string().url("Invalid server repo link URL"),
    })
});
const updateProjectSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, "Title is required").optional(),
    image: zod_1.z.string().url("Invalid image URL").optional(),
    overview: zod_1.z.string().min(1, "Overview is required").optional(),
    frontendTech: zod_1.z
        .array(zod_1.z.string())
        .min(1, "At least one frontend technology is required")
        .optional(),
    backendTech: zod_1.z
        .array(zod_1.z.string())
        .min(1, "At least one backend technology is required")
        .optional(),
    databaseTech: zod_1.z.string().min(1, "Database technology is required").optional(),
    liveDemoLink: zod_1.z.string().url("Invalid live demo link URL").optional(),
    clientRepoLink: zod_1.z.string().url("Invalid client repo link URL").optional(),
    serverRepoLink: zod_1.z.string().url("Invalid server repo link URL").optional(),
});
const projectValidation = {
    createProjectSchema,
    updateProjectSchema,
};
exports.default = projectValidation;
