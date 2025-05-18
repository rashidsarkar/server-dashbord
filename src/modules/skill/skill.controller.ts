import status from "http-status";
import catchAsync from "../../shared/catchasync";
import { sendResponse } from "../../utils/sendResponse";
import { skillService } from "./skill.service";

const getAllSkills = catchAsync(async (req, res) => {
  const result = await skillService.getAllSkills();

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Skills fetched successfully",
    data: result,
  });
});

const createSkill = catchAsync(async (req, res) => {
  const result = await skillService.createSkill(req.body);

  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: "Skill created successfully",
    data: result,
  });
});

const getSkillById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await skillService.getSkillById(id);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Skill fetched successfully",
    data: result,
  });
});

const updateSkill = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await skillService.updateSkill(id, req.body);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Skill updated successfully",
    data: result,
  });
});

const deleteSkill = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await skillService.deleteSkill(id);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Skill deleted successfully",
    data: result,
  });
});

export const skillController = {
  getAllSkills,
  createSkill,
  getSkillById,
  updateSkill,
  deleteSkill,
}; 