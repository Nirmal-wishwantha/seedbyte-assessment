const express = require("express");
const { getAllBooks, getBookById, addBook, updateBook, deleteBook } = require("../controllers/bookController");
const {getBookIdM,addBookM}= require("../middleware/middleware")
const router = express.Router();


router.get("/books",getAllBooks);

router.get("/book/:id",getBookIdM,getBookById);

router.post("/books",addBookM,addBook);

router.put("/book/:id",updateBook);

router.delete("/books/:id",deleteBook);

module.exports = router;
