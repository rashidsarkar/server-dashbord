import express from "express";
import { aboutController } from "./about.controller";
import validateRequest from "../../middlewares/validatedRequest";
import aboutValidation from "./about.validation";

const router = express.Router();

router.get("/", aboutController.getAllAbouts);
router.get("/:id", aboutController.getAboutById);
router.post(
  "/create-about",
  validateRequest(aboutValidation.createAboutSchema),
  aboutController.createAbout
);
router.patch(
  "/:id",
  validateRequest(aboutValidation.updateAboutSchema),
  aboutController.updateAbout
);
router.delete("/:id", aboutController.deleteAbout);

export const aboutRouter = router;
