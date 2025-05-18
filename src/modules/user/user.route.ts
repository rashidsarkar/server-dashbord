import express from "express";
import { userController } from "./user.controller";
import validateRequest from "../../middleware/validatedRequest";
import userValidation from "./user.validation";

const router = express.Router();

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post(
  "/create-user",
  validateRequest(userValidation.createUserSchema),
  userController.createUser
);
router.patch(
  "/:id",
  validateRequest(userValidation.updateUserSchema),
  userController.updateUser
);
router.delete("/:id", userController.deleteUser);

export const userRouter = router; 