"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const http_status_1 = __importDefault(require("http-status"));
const routers_1 = __importDefault(require("./routers"));
const globalErrorHandler_1 = __importDefault(require("./middlewares/globalErrorHandler"));
const app = (0, express_1.default)();
// CORS configuration
app.use((0, cors_1.default)({
    origin: [
        "https://server-client-l2-jp-as1.vercel.app",
        "http://localhost:3000",
        "https://porotfolio-dashbord.vercel.app",
        "https://portofilo-req-as1-l2.netlify.app",
    ],
    credentials: true,
}));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send({
        Message: "Portfolio  Server Start 2 with cors 2",
    });
});
app.use("/api/", routers_1.default);
app.use(globalErrorHandler_1.default);
app.use((req, res, next) => {
    res.status(http_status_1.default.NOT_FOUND).json({
        success: false,
        status: http_status_1.default.NOT_FOUND,
        message: "Route not found",
        error: {
            path: req.originalUrl,
        },
    });
});
exports.default = app;
