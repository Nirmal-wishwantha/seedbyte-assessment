const { body, validationResult } = require('express-validator');
const books = require ('../models/booksModel.js')

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


// Middleware to validate required fields for updating a book
const updateM = [
    body('name').optional().notEmpty().withMessage('Name must not be empty if provided'),
    body('author').optional().notEmpty().withMessage('Author must not be empty if provided'),
    body('publishedYear').optional().isNumeric().withMessage('Published Year must be a number if provided'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];



// Middleware to check if book exists before deleting
const deleteBookM = (req, res, next) => {
    const bookId = parseInt(req.params.id);

    for (let i = 0; i < books.length; i++) {  
        if (books[i].id === bookId) { 
            return next();
        }
    }

    return res.status(404).json({ message: "Book not found!" });
};



module.exports = { getBookIdM, addBookM, updateM, deleteBookM };
