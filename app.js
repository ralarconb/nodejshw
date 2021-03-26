const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world!\n');
});

const port = process.env.PORT || 3050;

app.listen(port, () => console.log(`app listening on http://localhost:${port}`) );