import { addBlog, deleteById, getAllBlogs, getById, updateBlog } from "../controllers/blog-controller.js";
import express from "express";



const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);

blogRouter.post("/add", addBlog);

blogRouter.put("/update/:id", updateBlog);

blogRouter.get("/:id", getById);

blogRouter.delete("/:id", deleteById);

export default blogRouter;