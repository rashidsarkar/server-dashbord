import status from "http-status";
import catchAsync from "../../shared/catchasync";
import { sendResponse } from "../../utils/sendResponse";
import { blogService } from "./blog.service";

const getAllBlogFromDb = catchAsync(async (req, res) => {
  const result = await blogService.getAllBlog();

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Blog fetched successfully",
    data: result,
  });
});

const createBlog = catchAsync(async (req, res) => {
  const result = await blogService.createBlog(req.body);

  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: "Blog created successfully",
    data: result,
  });
});

const getBlogById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await blogService.getBlogById(id);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Blog fetched successfully",
    data: result,
  });
});

const updateBlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await blogService.updateBlog(id, req.body);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Blog updated successfully",
    data: result,
  });
});

const deleteBlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await blogService.deleteBlog(id);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Blog deleted successfully",
    data: result,
  });
});

export const blogController = {
  getAllBlogFromDb,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
};
