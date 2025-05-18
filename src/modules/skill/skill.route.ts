import express from "express";
import { skillController } from "./skill.controller";
import validateRequest from "../../middleware/validatedRequest";
import skillValidation from "./skill.validation";

const router = express.Router();

router.get("/", skillController.getAllSkills);
router.get("/:id", skillController.getSkillById);
router.post(
  "/create-skill",
  validateRequest(skillValidation.createSkillSchema),
  skillController.createSkill
);
router.patch(
  "/:id",
  validateRequest(skillValidation.updateSkillSchema),
  skillController.updateSkill
);
router.delete("/:id", skillController.deleteSkill);

export const skillRouter = router; 