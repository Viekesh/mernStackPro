import mongoose from "mongoose";
import Blog from "../model/Blog.js";
import User from "../model/User.js";



export const getAllBlogs = async (req, res, next) => {
    let blogs;

    try {
        blogs = await Blog.find();
    } catch (error) {
        console.log(error);
    }

    if (!blogs) {
        return res.status(404).json({ message: "No Blogs Found" });
    }

    return res.status(200).json({ blogs })
}

export const addBlog = async (req, res, next) => {
    const { title, description, image, user } = req.body;

    let existingUser;

    try {
        existingUser = await User.findById(user);
    } catch (error) {
        return console.log(error);
    }

    if (!existingUser) {
        res.status(500).json({ message: "User Not Found" })
    }

    const blog = new Blog({
        title,
        description,
        image,
        user,
    });

    try {
        const session = await mongoose.startSession();
        session.startTransaction();
        await blog.save({ session });
        existingUser.blogs.push(blog);
        await existingUser.save({ session });
        await session.commitTransaction();
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error Occured" });
    }

    return res.status(200).json({ blog });
}

export const updateBlog = async (req, res, next) => {
    const { title, description } = req.body;

    const blogId = req.params.id;

    let blog;

    try {
        blog = await Blog.findByIdAndUpdate(blogId, {
            title,
            description,
        });
    } catch (error) {
        return console.log(error);
    }

    if (!blog) {
        return res.status(500).json({ message: "Unable To Update" })
    }

    return res.status(200).json({ blog });
}

export const getById = async (req, res, next) => {
    const id = req.params.id;

    let blog;

    try {
        blog = await Blog.findById(id);
    } catch (error) {
        return console.log(error);
    }

    if (!blog) {
        return res.status(404).json({ message: "No Blog Found" });
    }

    return res.status(200).json({ blog });
}

export const deleteById = async (req, res, next) => {
    const id = req.params.id;

    let blog;

    try {
        blog = await Blog.findByIdAndRemove(id).populate("user");
        await blog.user.blogs.pull(blog);
        await blog.user.save();
    } catch (error) {
        return console.log(error);
    }

    if (!blog) {
        return res.status(500).json({ message: "Unable To Delete" });
    }

    return res.status(200).json({ message: "Blog Is Now Deleted" });
}

export const getByUserId = async (req, res, next) => {
    const userId = req.params.id;

    let userBlogs;

    try {
        userBlogs = await User.findById(userId).populate("blogs");
    } catch (error) {
        return console.log(error);
    }

    if (!userBlogs) {
        res.status(404).json({ message: "No User Blogs Found" });
    }

    return res.status(200).json({ blogs: userBlogs });
}







// addBlog :
// Once we are creating a new add blog now we need to add the user as well
// So now this time the user will contain the id
// So before everything, by creating the addBlog now we can just create a validation we can...
// we can just create an existing user again like that ("let existingUser").

// Instead of directly saving the blog now we add the blog to the user as well
// for this we can add session from there