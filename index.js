const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
const quotes = [
    { id: 1, text: "KEEP doing hard things daily" },
    { id: 2, text: "KEEP your head down" },
    { id: 3, text: "KEEP yourself at discomfort" }
];

app.get('/api/quotes', (req, res) => {
    res.json(quotes); //req comes from the browser, res is the response that we give back back
})

app.get('/api/quotes/random', (req, res) => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    res.json(randomQuote);
});

app.listen(3000, () => {
    console.log("api server running at http://localhost:3000");
});git remote set-url origin https://github.com/suyash503/quote-api.git