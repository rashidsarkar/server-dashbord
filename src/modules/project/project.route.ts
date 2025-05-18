import express from "express";
import { projectController } from "./project.controller";
import validateRequest from "../../middlewares/validatedRequest";
import projectValidation from "./project.validation";

const router = express.Router();

router.get("/", projectController.getAllProjects);
router.get("/:id", projectController.getProjectById);
router.post(
  "/create-project",
  validateRequest(projectValidation.createProjectSchema),
  projectController.createProject
);
router.patch(
  "/:id",
  validateRequest(projectValidation.updateProjectSchema),
  projectController.updateProject
);
router.delete("/:id", projectController.deleteProject);

export const projectRouter = router;
