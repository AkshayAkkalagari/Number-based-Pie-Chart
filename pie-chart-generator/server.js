const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Endpoint to handle form submission
app.get('/generate-chart', (req, res) => {
    const input = parseInt(req.query.input);

    if (isNaN(input) || input < 1 || input > 100) {
        return res.status(400).send('Input must be an integer between 1 and 100.');
    }

    res.sendFile(path.join(__dirname, 'public', 'chart.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
