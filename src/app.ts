import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import status from "http-status";
import router from "./routers";
import globalErrorHandler from "./middlewares/globalErrorHandler";

const app: Application = express();
// CORS configuration
app.use(
  cors({
    origin: [
      "https://server-client-l2-jp-as1.vercel.app",
      "http://localhost:3000",
      "https://porotfolio-dashbord.vercel.app",
      "https://portofilo-req-as1-l2.netlify.app",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "X-Requested-With",
      "Accept",
      "Origin",
    ],
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req: Request, res: Response) => {
  res.send({
    Message: "toke Server Start 2 with cors 2 client netly",
  });
});

app.use("/api/", router);
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
