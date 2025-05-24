"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.skillRouter = void 0;
const express_1 = __importDefault(require("express"));
const skill_controller_1 = require("./skill.controller");
const validatedRequest_1 = __importDefault(require("../../middlewares/validatedRequest"));
const skill_validation_1 = __importDefault(require("./skill.validation"));
const router = express_1.default.Router();
router.get("/", skill_controller_1.skillController.getAllSkills);
router.get("/:id", skill_controller_1.skillController.getSkillById);
router.post("/create-skill", (0, validatedRequest_1.default)(skill_validation_1.default.createSkillSchema), skill_controller_1.skillController.createSkill);
router.patch("/:id", (0, validatedRequest_1.default)(skill_validation_1.default.updateSkillSchema), skill_controller_1.skillController.updateSkill);
router.delete("/:id", skill_controller_1.skillController.deleteSkill);
exports.skillRouter = router;
