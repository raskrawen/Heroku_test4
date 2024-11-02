// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Serverer statiske filer fra mappen "public"
app.use(express.static(path.join(__dirname, 'public')));

// Standard route til forsiden
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API endpoint, der sender en besked til frontend
app.get('/api/message', (req, res) => {
    res.json({ message: "Hello from the server!" });
});

app.listen(PORT, () => {
    console.log(`Server kører på port ${PORT}`);
});
