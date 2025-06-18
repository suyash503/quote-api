const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

app.use(cors());

const quotes = [
    { id: 1, text: "KEEP doing hard things daily" },
    { id: 2, text: "KEEP your head down" },
    { id: 3, text: "KEEP yourself at discomfort" }
];

// Define API routes first
app.get('/api/quotes', (req, res) => {
    res.json(quotes);
});

app.get('/api/quotes/random', (req, res) => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    res.json(randomQuote);
});

// Serve static files after API routes
app.use(express.static(path.join(__dirname)));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`api server running at http://localhost:${PORT}`);
});