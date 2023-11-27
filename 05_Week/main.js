const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Secret key for JWT
const secretKey = 'your_secret_key';

// Sample user credentials (in a real application, these would be stored in a database)
const users = {
    user: 'TATAKAE',
};

// Middleware for generating JWT token upon successful login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (users[username] && users[username] === password) {
        const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

// Middleware for verifying JWT token
const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization');

    if (token == null) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Forbidden' });
        }
        req.user = user;
        next();
    });
};

// Protected route
app.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'Welcome to the protected resource!', user: req.user });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
