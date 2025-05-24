"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectRouter = void 0;
const express_1 = __importDefault(require("express"));
const project_controller_1 = require("./project.controller");
const validatedRequest_1 = __importDefault(require("../../middlewares/validatedRequest"));
const project_validation_1 = __importDefault(require("./project.validation"));
const router = express_1.default.Router();
router.get("/", project_controller_1.projectController.getAllProjects);
router.get("/:id", project_controller_1.projectController.getProjectById);
router.post("/create-project", (0, validatedRequest_1.default)(project_validation_1.default.createProjectSchema), project_controller_1.projectController.createProject);
router.patch("/:id", (0, validatedRequest_1.default)(project_validation_1.default.updateProjectSchema), project_controller_1.projectController.updateProject);
router.delete("/:id", project_controller_1.projectController.deleteProject);
exports.projectRouter = router;
