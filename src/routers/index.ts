import express from "express";

import { blogRouter } from "../modules/blog/blog.route";
import { aboutRouter } from "../modules/about/about.route";
import { projectRouter } from "../modules/project/project.route";
import { userRouter } from "../modules/user/user.route";
import { projectFeatureRouter } from "../modules/project-feature/project-feature.route";
import { skillRouter } from "../modules/skill/skill.route";
import { projectCredentialRoutes } from "../modules/project-credential/project-credential.route";
import { educationRouter } from "../modules/education/education.route";
import { skillCategoryRouter } from "../modules/skill-category/skill-category.route";

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
    route: userRouter,
  },
  {
    path: "/project-feature",
    route: projectFeatureRouter,
  },
  {
    path: "/skill",
    route: skillRouter,
  },
  {
    path: "/project-credential",
    route: projectCredentialRoutes,
  },
  {
    path: "/education",
    route: educationRouter,
  },
  {
    path: "/skill-category",
    route: skillCategoryRouter,
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
