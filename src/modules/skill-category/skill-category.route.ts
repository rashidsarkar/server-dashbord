import express from "express";
import { skillCategoryController } from "./skill-category.controller";
import validateRequest from "../../middlewares/validatedRequest";
import skillCategoryValidation from "./skill-category.validation";

const router = express.Router();

router.get("/", skillCategoryController.getAllSkillCategories);
router.get("/:id", skillCategoryController.getSkillCategoryById);
router.post(
  "/create-skill-category",
  validateRequest(skillCategoryValidation.createSkillCategorySchema),
  skillCategoryController.createSkillCategory
);
router.patch(
  "/:id",
  validateRequest(skillCategoryValidation.updateSkillCategorySchema),
  skillCategoryController.updateSkillCategory
);
router.delete("/:id", skillCategoryController.deleteSkillCategory);

export const skillCategoryRouter = router;
