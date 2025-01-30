const express = require("express");
const { getAllBooks, getBookById, addBook, updateBook, deleteBook } = require("../controllers/bookController");

const router = express.Router();


router.get("/books", getAllBooks);

router.get("/book/:id",getBookById);

router.post("/books",addBook);

router.put("/book/:id",updateBook);

router.delete("/books/:id",deleteBook);

module.exports = router;
