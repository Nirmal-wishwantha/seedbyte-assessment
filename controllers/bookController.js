const books = require("../models/booksModel");

// List all books with pagination
exports.getAllBooks = (req, res) => {
    const { page = 1, limit = 5 } = req.query;

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + parseInt(limit);

    const paginatedBooks = books.slice(startIndex, endIndex);

    res.json({
        totalBooks: books.length,
        currentPage: parseInt(page),
        totalPages: Math.ceil(books.length / limit),
        books: paginatedBooks,
    });
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
    const { name, author, publishedYear } = req.body;
    const newBook = { id: books.length + 1, name, author, publishedYear };
    books.push(newBook);
    res.status(201).json(newBook);
};



// Update an existing book
exports.updateBook = (req, res) => {
    const { name, author, publishedYear } = req.body;
    const book = req.book;

    if (name) book.name = name;
    if (author) book.author = author;
    if (publishedYear) book.publishedYear = publishedYear;

    res.json(book);
};



//delete book

exports.deleteBook = (req, res) => {
    const bookId = parseInt(req.params.id);
    let found = false;

    for (let i = 0; i < books.length; i++) {
        if (books[i].id === bookId) {
            books.splice(i, 1); 
            found = true;
            break;
        }
    }

    if (!found) {
        return res.status(404).json({ message: "Book not found" });
    }

    res.json({ message: "Book deleted successfully" });
};
