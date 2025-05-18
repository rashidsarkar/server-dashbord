import status from "http-status";
import catchAsync from "../../shared/catchasync";
import { sendResponse } from "../../utils/sendResponse";
import { projectFeatureService } from "./project-feature.service";

const getAllProjectFeatures = catchAsync(async (req, res) => {
  const result = await projectFeatureService.getAllProjectFeatures();

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Project features fetched successfully",
    data: result,
  });
});

const createProjectFeature = catchAsync(async (req, res) => {
  const result = await projectFeatureService.createProjectFeature(req.body);

  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: "Project feature created successfully",
    data: result,
  });
});

const getProjectFeatureById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await projectFeatureService.getProjectFeatureById(id);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Project feature fetched successfully",
    data: result,
  });
});

const updateProjectFeature = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await projectFeatureService.updateProjectFeature(id, req.body);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Project feature updated successfully",
    data: result,
  });
});

const deleteProjectFeature = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await projectFeatureService.deleteProjectFeature(id);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Project feature deleted successfully",
    data: result,
  });
});

export const projectFeatureController = {
  getAllProjectFeatures,
  createProjectFeature,
  getProjectFeatureById,
  updateProjectFeature,
  deleteProjectFeature,
}; 