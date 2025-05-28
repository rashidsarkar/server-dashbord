"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    jwt: {
        access_secret: process.env.JWT_ACCESS_SECRET || "your-access-secret-key",
        refresh_secret: process.env.JWT_REFRESH_SECRET || "your-refresh-secret-key",
        access_expires: "1d",
        refresh_expires: "7d",
    },
    cookie: {
        secure: process.env.NODE_ENV === "production",
        httpOnly: true,
        sameSite: "strict",
    },
};
exports.default = config;
