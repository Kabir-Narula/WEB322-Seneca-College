const express = require('express');
const jwt = require('jsonwebtoken');
const morgan = require('morgan');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Part 1: Getting Started
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

// Part 2: Updating "req"
app.use((req, res, next) => {
    const userId = req.header('x-user-id');
    if (userId) {
        // Simulate retrieving user data from a database based on userId
        const userData = getUserDataFromDatabase(userId);
        req.userData = userData;
    }
    next();
});

// Part 3: Restricting Route Access
const authenticate = (req, res, next) => {
    if (req.userData) {
        return next(); // User is authenticated, proceed to the next middleware
    }
    res.status(401).json({ message: 'Unauthorized' }); // User is not authenticated
};

app.get('/profile', authenticate, (req, res) => {
    const user = req.userData;
    res.json({ user });
});

// Part 4: Handling 404 Errors
app.use((req, res, next) => {
    res.status(404).json({ message: 'Resource not found' });
});

// Part 5: Types of Middleware
// Application-Level Middleware
app.use((req, res, next) => {
    console.log('This middleware runs for every request');
    next();
});

// Router-Level Middleware
const router = express.Router();
router.use((req, res, next) => {
    console.log('This middleware runs only for requests to the router');
    next();
});

// Error-Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

// Part 6: Built-In Middleware
app.use(express.static('public'));

// Part 7: Third-Party Middleware
// morgan is already used above as a third-party middleware for request logging

// Helper function to simulate user data retrieval from a database
function getUserDataFromDatabase(userId) {
    // Simulated database query, return user data based on userId
    return {
        id: userId,
        username: 'exampleuser',
        email: 'user@example.com'
    };
}

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
