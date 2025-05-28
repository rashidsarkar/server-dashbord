import express from "express";
import { aboutController } from "./about.controller";
import validateRequest from "../../middlewares/validatedRequest";
import aboutValidation from "./about.validation";
import auth from "../../middlewares/auth";

const router = express.Router();

router.get("/", aboutController.getAllAbouts);
router.get("/:id", aboutController.getAboutById);
router.post(
  "/create-about",
  auth(),
  validateRequest(aboutValidation.createAboutSchema),
  aboutController.createAbout
);
router.patch(
  "/:id",
  auth(),
  validateRequest(aboutValidation.updateAboutSchema),
  aboutController.updateAbout
);
router.delete("/:id", auth(), aboutController.deleteAbout);

export const aboutRouter = router;
