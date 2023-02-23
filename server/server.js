const express = require('express');
const path = require('path');

const PORT = 8000;

const app = express();

app.use(express.static(path.join(__dirname, '../client', 'build')));

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
