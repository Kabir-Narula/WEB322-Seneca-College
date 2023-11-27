/*Exercise:

Create an Express.js application for a simple book management system. The application should have the following features:

Route to Get All Books:

Create an array of book objects, where each book has id, title, author, and publishedYear properties.
Set up an Express route to handle GET requests to the path /books.
When a GET request is made to /books, the server should respond with a JSON array containing all the book objects.
Route to Get a Specific Book:

Create a route to handle GET requests to the path /books/:id, where :id is the unique identifier of the book.
When a GET request is made to /books/:id, find the book with the corresponding id in the array and respond with a JSON object representing that book.
If the book with the given id does not exist, respond with a 404 status and a JSON object indicating an error.
Route to Add a New Book:

Set up a route to handle POST requests to the path /books.
Allow clients to send JSON data in the request body with title, author, and publishedYear properties.
Add the new book to the array of books and respond with a success message along with the newly added book object.
Note:

Use appropriate HTTP verbs (GET, POST) for the routes.
Utilize req.params, req.body, and res.status(), and res.json() to handle the requests and send responses.
Feel free to include additional validation or error handling if you like. This exercise will test your understanding of route handling, request parameters, request body parsing, and JSON responses in Express.js.*/


const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const books = [
    { id: 1, title: 'Book 1', author: 'Author 1', publishedYear: 2021 },
    { id: 2, title: 'Book 2', author: 'Author 2', publishedYear: 2022 },
    { id: 3, title: 'Book 3', author: 'Author 3', publishedYear: 2023 }
];

// Route to Get All Books
app.get('/books', (req, res) => {
    res.json(books);
});

// Route to Get a Specific Book
app.get('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = books.find(book => book.id === bookId);
    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ error: 'Book not found' });
    }
});

// Route to Add a New Book
app.post('/books', (req, res) => {
    const { title, author, publishedYear } = req.body;
    if (title && author && publishedYear) {
        const newBook = {
            id: books.length + 1,
            title,
            author,
            publishedYear
        };
        books.push(newBook);
        res.status(201).json({ message: 'Book added successfully', book: newBook });
    } else {
        res.status(400).json({ error: 'Invalid data. Please provide title, author, and publishedYear.' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


/*
To get all books:
 http://localhost:3000/books

To get a specific book (replace :id with an actual book ID):
http://localhost:3000/books/:id     //http://localhost:3000/books/2  [fetches book id 2]

To add a new book:
curl -X POST -H "Content-Type: application/json" -d '{"title": "New Book"         */