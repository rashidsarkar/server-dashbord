"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.educationRouter = void 0;
const express_1 = __importDefault(require("express"));
const education_controller_1 = require("./education.controller");
const validatedRequest_1 = __importDefault(require("../../middlewares/validatedRequest"));
const education_validation_1 = __importDefault(require("./education.validation"));
const router = express_1.default.Router();
router.get("/", education_controller_1.educationController.getAllEducations);
router.get("/:id", education_controller_1.educationController.getEducationById);
router.post("/create-education", (0, validatedRequest_1.default)(education_validation_1.default.createEducationSchema), education_controller_1.educationController.createEducation);
router.patch("/:id", (0, validatedRequest_1.default)(education_validation_1.default.updateEducationSchema), education_controller_1.educationController.updateEducation);
router.delete("/:id", education_controller_1.educationController.deleteEducation);
exports.educationRouter = router;
