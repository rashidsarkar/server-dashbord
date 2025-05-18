import status from "http-status";
import catchAsync from "../../shared/catchasync";
import { sendResponse } from "../../utils/sendResponse";
import { educationService } from "./education.service";

const getAllEducations = catchAsync(async (req, res) => {
  const result = await educationService.getAllEducations();

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Education information fetched successfully",
    data: result,
  });
});

const createEducation = catchAsync(async (req, res) => {
  const result = await educationService.createEducation(req.body);

  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: "Education information created successfully",
    data: result,
  });
});

const getEducationById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await educationService.getEducationById(id);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Education information fetched successfully",
    data: result,
  });
});

const updateEducation = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await educationService.updateEducation(id, req.body);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Education information updated successfully",
    data: result,
  });
});

const deleteEducation = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await educationService.deleteEducation(id);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Education information deleted successfully",
    data: result,
  });
});

export const educationController = {
  getAllEducations,
  createEducation,
  getEducationById,
  updateEducation,
  deleteEducation,
}; 