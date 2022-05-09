const express = require("express");
const book = require("../models/book-schema");
const booksController = require("../controller/book-controller");



const router = express.Router();

router.get("/", booksController.getAllBooks);

router.post("/", booksController.addBooks);

router.get("/:id", booksController.getById);

router.put("/:id", booksController.updateBook);

router.delete("/:id", booksController.deleteBook);

module.exports = router;