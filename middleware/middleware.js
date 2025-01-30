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


module.exports={getBookIdM}