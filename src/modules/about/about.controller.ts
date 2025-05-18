import status from "http-status";
import catchAsync from "../../shared/catchasync";
import { sendResponse } from "../../utils/sendResponse";
import { aboutService } from "./about.service";

const getAllAbouts = catchAsync(async (req, res) => {
  const result = await aboutService.getAllAbouts();

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "About information fetched successfully",
    data: result,
  });
});

const createAbout = catchAsync(async (req, res) => {
  const result = await aboutService.createAbout(req.body);

  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: "About information created successfully",
    data: result,
  });
});

const getAboutById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await aboutService.getAboutById(id);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "About information fetched successfully",
    data: result,
  });
});

const updateAbout = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await aboutService.updateAbout(id, req.body);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "About information updated successfully",
    data: result,
  });
});

const deleteAbout = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await aboutService.deleteAbout(id);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "About information deleted successfully",
    data: result,
  });
});

export const aboutController = {
  getAllAbouts,
  createAbout,
  getAboutById,
  updateAbout,
  deleteAbout,
}; 