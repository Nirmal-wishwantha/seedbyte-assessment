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

// add new book
exports.addBook = (req, res) => {
    const { name, author, publishedYear } = req.body;
    const newBook = { id: books.length + 1, name, author, publishedYear };
    books.push(newBook);
    res.status(201).json(newBook);
};



// Update an existing book

exports.updateBook = async (req, res) => {
    
        const book = parseInt(req.params.id);

        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }

        const { name, author, description } = req.body;
        if (name) book.name = name;
        if (author) book.author = author;
        if (description) book.description = description;

      
        return res.status(200).json({ message: "Book updated successfully",book });
    
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