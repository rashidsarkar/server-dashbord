import express from "express";
import { projectCredentialController } from "./project-credential.controller";
import { projectCredentialValidation } from "./project-credential.validation";
import validateRequest from "../../middlewares/validateRequest";

const router = express.Router();

router.get("/", projectCredentialController.getAllProjectCredentials);
router.get("/:id", projectCredentialController.getProjectCredentialById);
router.post(
  "/create-project-credential",
  validateRequest(projectCredentialValidation.createProjectCredentialSchema),
  projectCredentialController.createProjectCredential
);
router.patch(
  "/:id",
  validateRequest(projectCredentialValidation.updateProjectCredentialSchema),
  projectCredentialController.updateProjectCredential
);
router.delete("/:id", projectCredentialController.deleteProjectCredential);

export const projectCredentialRoutes = router; 