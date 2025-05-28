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
const jwtHelpers_1 = require("../shared/jwtHelpers");
const config_1 = __importDefault(require("../config"));
const AppError_1 = __importDefault(require("../shared/AppError"));
const http_status_1 = __importDefault(require("http-status"));
const auth = (...roles) => {
    return (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            // Get the token from Authorization header
            const authHeader = req.headers.authorization;
            if (!authHeader || !authHeader.startsWith("Bearer ")) {
                throw new AppError_1.default(http_status_1.default.UNAUTHORIZED, "You are not authorized");
            }
            const token = authHeader.split(" ")[1];
            if (!token) {
                throw new AppError_1.default(http_status_1.default.UNAUTHORIZED, "You are not authorized");
            }
            // Verify the token
            const decoded = jwtHelpers_1.jwtHelpers.verifyToken(token, config_1.default.jwt.access_secret);
            // Check if user role is authorized
            if (roles.length && !roles.includes(decoded.role)) {
                throw new AppError_1.default(http_status_1.default.FORBIDDEN, "You are not authorized to access this resource");
            }
            // Add user info to request
            req.user = decoded;
            next();
        }
        catch (error) {
            next(error);
        }
    });
};
exports.default = auth;
