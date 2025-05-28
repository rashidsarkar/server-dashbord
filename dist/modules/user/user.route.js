"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const validatedRequest_1 = __importDefault(require("../../middlewares/validatedRequest"));
const user_validation_1 = __importDefault(require("./user.validation"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = express_1.default.Router();
// Public routes
router.post("/create-user", (0, validatedRequest_1.default)(user_validation_1.default.createUserSchema), user_controller_1.userController.createUser);
router.post("/login", (0, validatedRequest_1.default)(user_validation_1.default.loginUserSchema), user_controller_1.userController.loginUser);
// Protected routes
router.get("/", (0, auth_1.default)(), user_controller_1.userController.getAllUsers);
router.get("/:id", (0, auth_1.default)(), user_controller_1.userController.getUserById);
router.patch("/:id", (0, auth_1.default)(), (0, validatedRequest_1.default)(user_validation_1.default.updateUserSchema), user_controller_1.userController.updateUser);
router.delete("/:id", (0, auth_1.default)(), user_controller_1.userController.deleteUser);
exports.userRoutes = router;
