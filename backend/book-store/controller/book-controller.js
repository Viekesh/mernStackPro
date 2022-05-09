const books = require("../models/book-schema");



const getAllBooks = async (req, res, next) => {

    let book;

    try {
        book = await books.find();
    } catch (error) {
        console.log(error.message);
    }

    if (!book) {
        return res.status(404).json({ message: "no products found" });
    }

    return res.status(200).json({ book });
};


const getById = async (req, res, next) => {

    const id = req.params.id;

    let book;

    try {
        book = await books.findById(id);
    } catch (error) {
        console.log(error);
    }

    if (!book) {
        return res.status(404).json({ message: "No Book Found" });
    }

    return res.status(200).json({ book });

};


const addBooks = async (req, res, next) => {

    const { name, author, description, price, available, image } = req.body;

    let book;

    try {
        book = new books({
            name,
            author,
            description,
            price,
            available,
            image,
        });
        await book.save();
    } catch (error) {
        console.log(error);
    }

    if (!book) {
        return res.status(500).json({ message: "Unable To Add" });
    }

    return res.status(201).json({ book });

};


const updateBook = async (req, res, next) => {

    const id = req.params.id;

    const { name, author, description, price, available, image } = req.body;

    let book;

    try {
        book = await books.findByIdAndUpdate(id, {
            name,
            author,
            description,
            price,
            available,
            image,
        });
        book = await books.save();
    } catch (error) {
        console.log(error);
    }

    if (!book) {
        return res.status(404).json({ message: "Unable To Update" });
    }

    return res.status(200).json({ book });

};


const deleteBook = async (req, res, next) => {

    const id = req.params.id;

    let book;

    try {
        book = await books.findByIdAndRemove(id);
    } catch (error) {
        console.log(error);
    }

    if (!book) {
        return res.status(404).json({ message: "Unable To Delete" });
    }

    return res.status(200).json({ message: "Book Successfully Deleted" });
};


exports.getAllBooks = getAllBooks;

exports.addBooks = addBooks;

exports.getById = getById;

exports.updateBook = updateBook;

exports.deleteBook = deleteBook;