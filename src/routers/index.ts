import express from "express";

import { blogRouter } from "../modules/blog/blog.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/blog",
    route: blogRouter,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
