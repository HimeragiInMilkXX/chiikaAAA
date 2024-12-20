const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'main')));

// Default route to serve 'index.html'
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'main', 'index.html'));
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
