"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.aboutRouter = void 0;
const express_1 = __importDefault(require("express"));
const about_controller_1 = require("./about.controller");
const validatedRequest_1 = __importDefault(require("../../middlewares/validatedRequest"));
const about_validation_1 = __importDefault(require("./about.validation"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = express_1.default.Router();
router.get("/", about_controller_1.aboutController.getAllAbouts);
router.get("/:id", about_controller_1.aboutController.getAboutById);
router.post("/create-about", (0, auth_1.default)(), (0, validatedRequest_1.default)(about_validation_1.default.createAboutSchema), about_controller_1.aboutController.createAbout);
router.patch("/:id", (0, auth_1.default)(), (0, validatedRequest_1.default)(about_validation_1.default.updateAboutSchema), about_controller_1.aboutController.updateAbout);
router.delete("/:id", (0, auth_1.default)(), about_controller_1.aboutController.deleteAbout);
exports.aboutRouter = router;
