const express = require("express");
const { getAllBooks, getBookById, addBook, updateBook, deleteBook } = require("../controllers/bookController");
const {getBookIdM,addBookM,deleteBookM,updateM}= require("../middleware/middleware")
const router = express.Router();


router.get("/books",getAllBooks);

router.get("/book/:id",getBookIdM,getBookById);

router.post("/book",addBookM,addBook);

router.put("/book/:id",getBookIdM,updateM,updateBook);

router.delete("/book/:id",getBookIdM,deleteBookM,deleteBook);

module.exports = router;
