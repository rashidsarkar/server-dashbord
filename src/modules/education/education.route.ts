import express from "express";
import { educationController } from "./education.controller";
import validateRequest from "../../middleware/validatedRequest";
import educationValidation from "./education.validation";

const router = express.Router();

router.get("/", educationController.getAllEducations);
router.get("/:id", educationController.getEducationById);
router.post(
  "/create-education",
  validateRequest(educationValidation.createEducationSchema),
  educationController.createEducation
);
router.patch(
  "/:id",
  validateRequest(educationValidation.updateEducationSchema),
  educationController.updateEducation
);
router.delete("/:id", educationController.deleteEducation);

export const educationRouter = router;

 