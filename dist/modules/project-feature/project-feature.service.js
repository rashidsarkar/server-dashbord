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
exports.projectFeatureService = void 0;
const prisma_1 = __importDefault(require("../../shared/prisma"));
const getAllProjectFeatures = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.projectFeature.findMany({
        include: {
            project: true,
        },
    });
    return result;
});
const createProjectFeature = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.projectFeature.create({
        data,
        include: {
            project: true,
        },
    });
    return result;
});
const getProjectFeatureById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.projectFeature.findUnique({
        where: {
            id,
        },
        include: {
            project: true,
        },
    });
    return result;
});
const updateProjectFeature = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.projectFeature.update({
        where: {
            id,
        },
        data,
        include: {
            project: true,
        },
    });
    return result;
});
const deleteProjectFeature = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.projectFeature.delete({
        where: {
            id,
        },
        include: {
            project: true,
        },
    });
    return result;
});
exports.projectFeatureService = {
    getAllProjectFeatures,
    createProjectFeature,
    getProjectFeatureById,
    updateProjectFeature,
    deleteProjectFeature,
};
