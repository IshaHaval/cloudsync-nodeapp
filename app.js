const express = require('express');
const helmet = require('helmet'); // Security middleware
const open = require('open'); // For opening browser locally
require('dotenv').config(); // Load environment variables
const path = require('path'); // For safe file paths

const app = express();
const port = process.env.PORT || 3000;

// Use Helmet for security
app.use(helmet());

// Serve static files from "public" folder
app.use(express.static('public'));

// ➡️ Home Route - Basic message
app.get('/', (req, res) => {
    res.send(process.env.APP_MESSAGE || 'Hello, CloudSync NodeApp!');
});

// ➡️ About Route - Serve About page
app.get('/about', (req, res) => {
    const aboutPath = path.join(__dirname, 'public', 'about.html');
    console.log('Serving about page from:', aboutPath);
    res.sendFile(aboutPath);
});

// ➡️ Health Check Route
app.get('/health', (req, res) => {
    const healthPath = path.join(__dirname, 'public', 'health.html');
    console.log('Serving health page from:', healthPath);
    res.sendFile(healthPath);
});

// Start server and auto-open browser only locally (not in production)
app.listen(port, () => {
    console.log(`🚀 Server is running on port ${port}`);

    if (process.env.NODE_ENV !== 'production') {
        open(`http://localhost:${port}`).catch(err => {
            console.error('Failed to open browser:', err.message);
        });
    }
});
