// Your task description goes here

// For demonstration purposes, I will write some basic TypeScript code. Feel free to modify this as needed.
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => console.log(`Example app is running on http://localhost:${port}`));
