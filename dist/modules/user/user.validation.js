"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const createUserSchema = zod_1.z.object({
    email: zod_1.z.string().email("Invalid email address"),
    name: zod_1.z.string().min(1, "Name is required"),
    password: zod_1.z.string().min(6, "Password must be at least 6 characters"),
    role: zod_1.z.enum(["USER", "ADMIN"]).optional(),
}).strict();
const updateUserSchema = zod_1.z.object({
    email: zod_1.z.string().email("Invalid email address").optional(),
    name: zod_1.z.string().min(1, "Name is required").optional(),
    password: zod_1.z.string().min(6, "Password must be at least 6 characters").optional(),
    role: zod_1.z.enum(["USER", "ADMIN"]).optional(),
}).strict();
const userValidation = {
    createUserSchema,
    updateUserSchema,
};
exports.default = userValidation;
