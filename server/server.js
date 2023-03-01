require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());

// app.use(express.static(path.join(__dirname, '../client', 'build')));
app.get('/api/posts', async (req, res) => {
    res.status(200).json({
        status: 'success',
        data: [
            {
                id: 1,
                title: 'Hi',
            },
            {
                id: 2,
                title: 'Hello',
            },
        ],
    });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
