import express from "express";
import { skillController } from "./skill.controller";
import validateRequest from "../../middlewares/validatedRequest";
import skillValidation from "./skill.validation";
import auth from "../../middlewares/auth";

const router = express.Router();

router.get("/", skillController.getAllSkills);
router.get("/:id", skillController.getSkillById);
router.post(
  "/create-skill",
  auth(),
  validateRequest(skillValidation.createSkillSchema),
  skillController.createSkill
);
router.patch(
  "/:id",
  auth(),
  validateRequest(skillValidation.updateSkillSchema),
  skillController.updateSkill
);
router.delete("/:id", auth(), skillController.deleteSkill);

export const skillRouter = router;
