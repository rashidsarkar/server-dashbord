import status from "http-status";
import catchAsync from "../../shared/catchasync";
import { sendResponse } from "../../utils/sendResponse";
import { projectCredentialService } from "./project-credential.service";

const getAllProjectCredentials = catchAsync(async (req, res) => {
  const result = await projectCredentialService.getAllProjectCredentials();

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Project credentials fetched successfully",
    data: result,
  });
});

const createProjectCredential = catchAsync(async (req, res) => {
  const result = await projectCredentialService.createProjectCredential(req.body);

  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: "Project credential created successfully",
    data: result,
  });
});

const getProjectCredentialById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await projectCredentialService.getProjectCredentialById(id);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Project credential fetched successfully",
    data: result,
  });
});

const updateProjectCredential = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await projectCredentialService.updateProjectCredential(id, req.body);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Project credential updated successfully",
    data: result,
  });
});

const deleteProjectCredential = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await projectCredentialService.deleteProjectCredential(id);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Project credential deleted successfully",
    data: result,
  });
});

export const projectCredentialController = {
  getAllProjectCredentials,
  createProjectCredential,
  getProjectCredentialById,
  updateProjectCredential,
  deleteProjectCredential,
}; 