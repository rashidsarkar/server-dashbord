import { NextFunction, Request, Response } from "express";
import { jwtHelpers } from "../shared/jwtHelpers";
import config from "../config";
import AppError from "../shared/AppError";
import status from "http-status";

const auth = (...roles: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Get the token from Authorization header
      const authHeader = req.headers.authorization;

      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new AppError(status.UNAUTHORIZED, "You are not authorized");
      }

      const token = authHeader.split(" ")[1];

      if (!token) {
        throw new AppError(status.UNAUTHORIZED, "You are not authorized");
      }

      // Verify the token
      const decoded = jwtHelpers.verifyToken(token, config.jwt.access_secret);

      // Check if user role is authorized
      if (roles.length && !roles.includes(decoded.role)) {
        throw new AppError(
          status.FORBIDDEN,
          "You are not authorized to access this resource"
        );
      }

      // Add user info to request
      req.user = decoded;
      next();
    } catch (error) {
      next(error);
    }
  };
};

export default auth;
