import express, { NextFunction, Request, Response } from "express";
const router = express.Router();
router.get("/", bikeController.getAllBikeFromDB);
