const books = require ('../models/booksModel.js')
const { body, validationResult } = require('express-validator');



// Middleware to check if the book exists by ID
const getBookIdM = (req, res, next) => {
    
    const bookId = parseInt(req.params.id);


    if (isNaN(bookId)) {
        return res.status(401).json({ message: "Invalid book ID" });
    }

    const book = books.find(b => b.id === bookId);
    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }

    req.book = book;
    next();
};



// Middleware to validate required fields for adding a book
const addBookM = [
    body('name').notEmpty().withMessage('Name is required'),
    body('author').notEmpty().withMessage('Author is required'),
    body('publishedYear').notEmpty().isNumeric().withMessage('Published Year is required and must be a number'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports={getBookIdM,addBookM}