const express = require('express');
const helmet = require('helmet'); // Security middleware
const open = require('open'); // Correct import for version 8.x.x
require('dotenv').config(); // Environment variables

const app = express();
const port = process.env.PORT || 3000;

// Use Helmet for security
app.use(helmet());

// Serve static files from "public" folder
app.use(express.static('public'));

// ➡️ Home Route - Basic message
app.get('/', (req, res) => {
    res.send('Hello, CloudSync NodeApp!');
});

// ➡️ About Route - Serve About page
app.get('/about', (req, res) => {
    const aboutPath = __dirname + '/public/about.html';
    console.log('Serving about page from:', aboutPath); // Log the path
    res.sendFile(aboutPath);
});


// ➡️ Health Check Route
app.get('/health', (req, res) => {
    const healthPath = __dirname + '/public/health.html';
    console.log('Serving health page from:', healthPath); // Log the path
    res.sendFile(healthPath);
});

// Start server and auto open browser
app.listen(port, () => {
    console.log(`🚀 Server is running on port ${port}`);
    open(`http://localhost:${port}`); // No need for `await` here with version 8.x.x
});
