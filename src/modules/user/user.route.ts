import express from "express";
import { userController } from "./user.controller";
import validateRequest from "../../middlewares/validatedRequest";
import userValidation from "./user.validation";
import auth from "../../middlewares/auth";

const router = express.Router();

// Public routes
router.post(
  "/create-user",
  validateRequest(userValidation.createUserSchema),
  userController.createUser
);

router.post(
  "/login",
  validateRequest(userValidation.loginUserSchema),
  userController.loginUser
);

// Protected routes
router.get("/", auth(), userController.getAllUsers);

router.get("/:id", auth(), userController.getUserById);

router.patch(
  "/:id",
  auth(),
  validateRequest(userValidation.updateUserSchema),
  userController.updateUser
);

router.delete("/:id", auth(), userController.deleteUser);

export const userRoutes = router;
