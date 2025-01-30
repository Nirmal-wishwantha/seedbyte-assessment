# 📚 Books API

A simple RESTful API for managing books, built with Node.js and Express.js.

---

## 🚀 Features
- List all books 📖
- Get book details by ID 🔍
- Add a new book ➕
- Update an existing book ✏️
- Delete a book ❌
- In-memory storage (no database required) 🗄️
- Error handling & validation 🛠️
- CORS support for cross-origin requests 🌐

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository
```sh

git clone <your-repo-url>
cd books-api
2️⃣ Install Dependencies

Copy
npm install
3️⃣ Run the Server

Copy
nodemon server.js
or nodemon
4️⃣ API Documentation
Open your browser and visit:


Copy open Swagger
http://localhost:3001/api-docs


📌 API Endpoints

1️⃣ 📖 List All Books
GET /api/books
✅ Response:

json
Copy
[
  { "id": 1, "name": "Book One", "author": "Author One", "publishedYear": 2020 },
  { "id": 2, "name": "Book Two", "author": "Author Two", "publishedYear": 2021 }
]


2️⃣ 🔍 Get Book by ID
GET /api/books/:id
✅ Response:

json
Copy
{ "id": 1, "name": "Book One", "author": "Author One", "publishedYear": 2020 }
❌ Error (if not found):

json
Copy
{ "message": "Book not found" }



3️⃣ ➕ Add a New Book
POST /api/books
📥 Request Body (JSON):

json
Copy
{ "name": "New Book", "author": "New Author", "publishedYear": 2023 }
✅ Response:

json
Copy
{ "id": 3, "name": "New Book", "author": "New Author", "publishedYear": 2023 }
❌ Error (if missing fields):

json
Copy
{ "message": "All fields are required" }



4️⃣ ✏️ Update a Book
PUT /api/books/:id
📥 Request Body (JSON):

json
Copy
{ "name": "Updated Name" }
✅ Response:

json
Copy
{ "id": 1, "name": "Updated Name", "author": "Author One", "publishedYear": 2020 }
❌ Error (if book not found):

json
Copy
{ "message": "Book not found" }



5️⃣ ❌ Delete a Book
DELETE /api/books/:id
✅ Response:

json
Copy
{ "message": "Book deleted successfully" }
❌ Error (if book not found):

json
Copy
{ "message": "Book not found" }


🔥 Technologies Used

Node.js 🌍
Express.js 🚀
CORS 🔒