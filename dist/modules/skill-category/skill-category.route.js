"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.skillCategoryRouter = void 0;
const express_1 = __importDefault(require("express"));
const skill_category_controller_1 = require("./skill-category.controller");
const validatedRequest_1 = __importDefault(require("../../middlewares/validatedRequest"));
const skill_category_validation_1 = __importDefault(require("./skill-category.validation"));
const router = express_1.default.Router();
router.get("/", skill_category_controller_1.skillCategoryController.getAllSkillCategories);
router.get("/:id", skill_category_controller_1.skillCategoryController.getSkillCategoryById);
router.post("/create-skill-category", (0, validatedRequest_1.default)(skill_category_validation_1.default.createSkillCategorySchema), skill_category_controller_1.skillCategoryController.createSkillCategory);
router.patch("/:id", (0, validatedRequest_1.default)(skill_category_validation_1.default.updateSkillCategorySchema), skill_category_controller_1.skillCategoryController.updateSkillCategory);
router.delete("/:id", skill_category_controller_1.skillCategoryController.deleteSkillCategory);
exports.skillCategoryRouter = router;
