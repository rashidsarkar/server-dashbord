"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.educationService = void 0;
const prisma_1 = __importDefault(require("../../shared/prisma"));
const getAllEducations = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.education.findMany({
        include: {
            about: true,
        },
    });
    return result;
});
const createEducation = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.education.create({
        data,
        include: {
            about: true,
        },
    });
    return result;
});
const getEducationById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.education.findUnique({
        where: {
            id,
        },
        include: {
            about: true,
        },
    });
    return result;
});
const updateEducation = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.education.update({
        where: {
            id,
        },
        data,
        include: {
            about: true,
        },
    });
    return result;
});
const deleteEducation = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.education.delete({
        where: {
            id,
        },
        include: {
            about: true,
        },
    });
    return result;
});
exports.educationService = {
    getAllEducations,
    createEducation,
    getEducationById,
    updateEducation,
    deleteEducation,
};
