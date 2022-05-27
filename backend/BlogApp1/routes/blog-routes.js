import { addBlog, getAllBlogs } from "../controllers/blog-controller.js";
import express from "express";



const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);

blogRouter.post("/add", addBlog);

export default blogRouter;