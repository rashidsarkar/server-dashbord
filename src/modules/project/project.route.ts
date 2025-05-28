import express from "express";
import { projectController } from "./project.controller";
import validateRequest from "../../middlewares/validatedRequest";
import projectValidation from "./project.validation";
import auth from "../../middlewares/auth";

const router = express.Router();

router.get("/", projectController.getAllProjects);
router.get("/:id", projectController.getProjectById);
router.post(
  "/create-project",
  auth(),
  validateRequest(projectValidation.createProjectSchema),
  projectController.createProject
);
router.patch(
  "/:id",
  auth(),
  validateRequest(projectValidation.updateProjectSchema),
  projectController.updateProject
);
router.delete("/:id", auth(), projectController.deleteProject);

export const projectRouter = router;
