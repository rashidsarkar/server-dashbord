import status from "http-status";
import catchAsync from "../../shared/catchasync";
import { sendResponse } from "../../utils/sendResponse";
import { projectService } from "./project.service";

const getAllProjects = catchAsync(async (req, res) => {
  const result = await projectService.getAllProjects();

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Projects fetched successfully",
    data: result,
  });
});

const createProject = catchAsync(async (req, res) => {
  const result = await projectService.createProject(req.body);

  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: "Project created successfully",
    data: result,
  });
});

const getProjectById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await projectService.getProjectById(id);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Project fetched successfully",
    data: result,
  });
});

const updateProject = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await projectService.updateProject(id, req.body);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Project updated successfully",
    data: result,
  });
});

const deleteProject = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await projectService.deleteProject(id);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Project deleted successfully",
    data: result,
  });
});

export const projectController = {
  getAllProjects,
  createProject,
  getProjectById,
  updateProject,
  deleteProject,
}; 