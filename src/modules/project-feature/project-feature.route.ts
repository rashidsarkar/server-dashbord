import express from "express";
import { projectFeatureController } from "./project-feature.controller";
import validateRequest from "../../middleware/validatedRequest";
import projectFeatureValidation from "./project-feature.validation";

const router = express.Router();

router.get("/", projectFeatureController.getAllProjectFeatures);
router.get("/:id", projectFeatureController.getProjectFeatureById);
router.post(
  "/create-project-feature",
  validateRequest(projectFeatureValidation.createProjectFeatureSchema),
  projectFeatureController.createProjectFeature
);
router.patch(
  "/:id",
  validateRequest(projectFeatureValidation.updateProjectFeatureSchema),
  projectFeatureController.updateProjectFeature
);
router.delete("/:id", projectFeatureController.deleteProjectFeature);

export const projectFeatureRouter = router; 