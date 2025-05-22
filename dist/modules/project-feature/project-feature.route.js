"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectFeatureRouter = void 0;
const express_1 = __importDefault(require("express"));
const project_feature_controller_1 = require("./project-feature.controller");
const validatedRequest_1 = __importDefault(require("../../middlewares/validatedRequest"));
const project_feature_validation_1 = __importDefault(require("./project-feature.validation"));
const router = express_1.default.Router();
router.get("/", project_feature_controller_1.projectFeatureController.getAllProjectFeatures);
router.get("/:id", project_feature_controller_1.projectFeatureController.getProjectFeatureById);
router.post("/create-project-feature", (0, validatedRequest_1.default)(project_feature_validation_1.default.createProjectFeatureSchema), project_feature_controller_1.projectFeatureController.createProjectFeature);
router.patch("/:id", (0, validatedRequest_1.default)(project_feature_validation_1.default.updateProjectFeatureSchema), project_feature_controller_1.projectFeatureController.updateProjectFeature);
router.delete("/:id", project_feature_controller_1.projectFeatureController.deleteProjectFeature);
exports.projectFeatureRouter = router;
