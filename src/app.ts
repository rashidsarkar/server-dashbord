import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import status from "http-status";
import router from "./routers";
import globalErrorHandler from "./middlewares/globalErrorHandler";

const app: Application = express();

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",
  "https://server-dashbord.vercel.app",
  "https://porotfolio-dashbord.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// Support preflight (CORS OPTIONS) requests
app.options("*", cors());

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send({
    Message: "Portfolio Server Start",
  });
});

app.use("/api/", router);

// Error handlers
app.use(globalErrorHandler);
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(status.NOT_FOUND).json({
    success: false,
    status: status.NOT_FOUND,
    message: "Route not found",
    error: {
      path: req.originalUrl,
    },
  });
});

export default app;
