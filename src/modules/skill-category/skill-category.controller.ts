import status from "http-status";
import catchAsync from "../../shared/catchasync";
import { sendResponse } from "../../utils/sendResponse";
import { skillCategoryService } from "./skill-category.service";

const getAllSkillCategories = catchAsync(async (req, res) => {
  const result = await skillCategoryService.getAllSkillCategories();

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Skill categories fetched successfully",
    data: result,
  });
});

const createSkillCategory = catchAsync(async (req, res) => {
  const result = await skillCategoryService.createSkillCategory(req.body);

  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: "Skill category created successfully",
    data: result,
  });
});

const getSkillCategoryById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await skillCategoryService.getSkillCategoryById(id);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Skill category fetched successfully",
    data: result,
  });
});

const updateSkillCategory = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await skillCategoryService.updateSkillCategory(id, req.body);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Skill category updated successfully",
    data: result,
  });
});

const deleteSkillCategory = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await skillCategoryService.deleteSkillCategory(id);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Skill category deleted successfully",
    data: result,
  });
});

export const skillCategoryController = {
  getAllSkillCategories,
  createSkillCategory,
  getSkillCategoryById,
  updateSkillCategory,
  deleteSkillCategory,
}; 