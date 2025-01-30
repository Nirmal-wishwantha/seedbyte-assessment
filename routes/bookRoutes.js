const express = require("express");
const { getAllBooks, getBookById, addBook, updateBook, deleteBook } = require("../controllers/bookController");
const {getBookIdM,addBookM,deleteBookM,updateM}= require("../middleware/middleware")
const router = express.Router();


/**
 * @swagger
 * /books:
 *   get:
 *     summary: Retrieve all books with pagination
 *     description: Fetches a paginated list of books from the database.
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           example: 2
 *         description: The page number (default is 1).
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           example: 5
 *         description: Number of books per page (default is 10).
 *     responses:
 *       200:
 *         description: A paginated list of books.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalBooks:
 *                   type: integer
 *                 totalPages:
 *                   type: integer
 *                 currentPage:
 *                   type: integer
 *                 books:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       name:
 *                         type: string
 *                       author:
 *                         type: string
 *                       publishedYear:
 *                         type: integer
 */
router.get("/books",getAllBooks);


/**
 * @swagger
 * /books/{id}:
 *   get:
 *     summary: Get a book by ID
 *     description: Retrieve details of a book by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Book found
 *       404:
 *         description: Book not found
 */
router.get("/book/:id",getBookIdM,getBookById);

/**
 * @swagger
 * /books:
 *   post:
 *     summary: Add a new book
 *     description: Create a new book with name, author, and published year.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: 
 *               - name
 *               - author
 *               - publishedYear
 *             properties:
 *               name:
 *                 type: string
 *               author:
 *                 type: string
 *               publishedYear:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Book created successfully
 *       400:
 *         description: Validation error
 */
router.post("/book",addBookM,addBook);


/**
 * @swagger
 * /books/{id}:
 *   put:
 *     summary: Update an existing book
 *     description: Modify details of an existing book.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               author:
 *                 type: string
 *               publishedYear:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Book updated successfully
 *       400:
 *         description: Validation error
 *       404:
 *         description: Book not found
 */
router.put("/book/:id",getBookIdM,updateM,updateBook);


/**
 * @swagger
 * /books/{id}:
 *   delete:
 *     summary: Delete a book
 *     description: Removes a book from the collection by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Book deleted successfully
 *       404:
 *         description: Book not found
 */
router.delete("/book/:id",getBookIdM,deleteBookM,deleteBook);

module.exports = router;
