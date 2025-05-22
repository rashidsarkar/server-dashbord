"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectCredentialRoutes = void 0;
const express_1 = __importDefault(require("express"));
const project_credential_controller_1 = require("./project-credential.controller");
const project_credential_validation_1 = __importDefault(require("./project-credential.validation"));
const validatedRequest_1 = __importDefault(require("../../middlewares/validatedRequest"));
const router = express_1.default.Router();
router.get("/", project_credential_controller_1.projectCredentialController.getAllProjectCredentials);
router.get("/:id", project_credential_controller_1.projectCredentialController.getProjectCredentialById);
router.post("/create-project-credential", (0, validatedRequest_1.default)(project_credential_validation_1.default.createProjectCredentialSchema), project_credential_controller_1.projectCredentialController.createProjectCredential);
router.patch("/:id", (0, validatedRequest_1.default)(project_credential_validation_1.default.updateProjectCredentialSchema), project_credential_controller_1.projectCredentialController.updateProjectCredential);
router.delete("/:id", project_credential_controller_1.projectCredentialController.deleteProjectCredential);
exports.projectCredentialRoutes = router;
