import { addBlog, getAllBlogs, updateBlog } from "../controllers/blog-controller.js";
import express from "express";



const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);

blogRouter.post("/add", addBlog);

blogRouter.put("/update/:id", updateBlog);

export default blogRouter;