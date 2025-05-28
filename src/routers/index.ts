import express from "express";

import { blogRouter } from "../modules/blog/blog.route";
import { aboutRouter } from "../modules/about/about.route";
import { projectRouter } from "../modules/project/project.route";
import { userRoutes } from "../modules/user/user.route";
import { skillRouter } from "../modules/skill/skill.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/blog",
    route: blogRouter,
  },
  {
    path: "/about",
    route: aboutRouter,
  },
  {
    path: "/project",
    route: projectRouter,
  },
  {
    path: "/user",
    route: userRoutes,
  },
  {
    path: "/skill",
    route: skillRouter,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
