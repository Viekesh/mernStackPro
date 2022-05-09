const mongoose = require("mongoose");

const books_schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    available: {
        type: Boolean,
        required: true,
    }
});

const books = mongoose.model("books", books_schema);

module.exports = books;