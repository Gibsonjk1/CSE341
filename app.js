const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes');const lesson1 = require('./controllers/lesson1');

app.get('/', lesson1.homeroute); 

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});