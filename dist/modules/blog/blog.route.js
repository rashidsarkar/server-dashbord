"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogRouter = void 0;
const express_1 = __importDefault(require("express"));
const blog_controller_1 = require("./blog.controller");
const validatedRequest_1 = __importDefault(require("../../middlewares/validatedRequest"));
const blog_validation_1 = __importDefault(require("./blog.validation"));
const router = express_1.default.Router();
router.get("/", blog_controller_1.blogController.getAllBlogFromDb);
router.get("/:id", blog_controller_1.blogController.getBlogById);
router.post("/create-blog", (0, validatedRequest_1.default)(blog_validation_1.default.createBlogSchema), blog_controller_1.blogController.createBlog);
router.patch("/:id", (0, validatedRequest_1.default)(blog_validation_1.default.updateBlogSchema), blog_controller_1.blogController.updateBlog);
router.delete("/:id", blog_controller_1.blogController.deleteBlog);
exports.blogRouter = router;
