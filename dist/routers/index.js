"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const blog_route_1 = require("../modules/blog/blog.route");
const about_route_1 = require("../modules/about/about.route");
const project_route_1 = require("../modules/project/project.route");
const user_route_1 = require("../modules/user/user.route");
const skill_route_1 = require("../modules/skill/skill.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/blog",
        route: blog_route_1.blogRouter,
    },
    {
        path: "/about",
        route: about_route_1.aboutRouter,
    },
    {
        path: "/project",
        route: project_route_1.projectRouter,
    },
    {
        path: "/user",
        route: user_route_1.userRouter,
    },
    {
        path: "/skill",
        route: skill_route_1.skillRouter,
    },
];
moduleRoutes.forEach((route) => {
    router.use(route.path, route.route);
});
exports.default = router;
