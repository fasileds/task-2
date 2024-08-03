import express from "express";
import { varifyToken, varifyUser } from "../midlware/varifyToken.js";
import {
  createBlog,
  delateBlog,
  getBlogs,
  getSinglBlog,
  getSpecificUserBlog,
  updateBlog,
} from "../controler/blog.js";

const routes = express.Router();

routes.post("/createBlog", createBlog);
routes.get("/", getBlogs);
routes.get("/userBlog", getSpecificUserBlog);
routes.get("/:id", getSinglBlog);
routes.patch("/updateBlog/:id", varifyUser, updateBlog);
routes.delete("/deleate/:id", delateBlog);

export default routes;
