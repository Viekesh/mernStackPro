const book = require("../models/book-schema");

const getAllBooks = async (req, res, next) => {

    let books;

    try {
        books = await book.find();
    } catch (error) {
        console.log(error.message);
    }

    if (!books) {
        return res.status(404).json({ message: "no products found" });
    }

    return res.status(200).json({ books });
};

module.exports = getAllBooks;