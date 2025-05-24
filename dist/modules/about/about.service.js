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
exports.aboutService = void 0;
const prisma_1 = __importDefault(require("../../shared/prisma"));
const getAllAbouts = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.about.findMany({});
    return result;
});
const createAbout = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.about.create({
        data,
    });
    return result;
});
const getAboutById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.about.findUnique({
        where: {
            id,
        },
    });
    return result;
});
const updateAbout = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.about.update({
        where: {
            id,
        },
        data,
    });
    return result;
});
const deleteAbout = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.about.delete({
        where: {
            id,
        },
    });
    return result;
});
exports.aboutService = {
    getAllAbouts,
    createAbout,
    getAboutById,
    updateAbout,
    deleteAbout,
};
