const books = require("../models/booksModel")

// List all books with pagination
exports.getAllBooks = (req, res) => {
    
};


// Get a book by ID
exports.getBookById = (req, res) => {

    const bookId = parseInt(req.params.id);
    const book = books.find(b => b.id == bookId);

    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }

    res.json(book);
};


// Add a new book
exports.addBook = (req, res) => {
    
};



// Update an existing book
exports.updateBook = (req, res) => {
    
};



//delete book

exports.deleteBook = (req, res) => {
    
};
