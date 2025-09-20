const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes');
const lesson1controller = require('./controllers/lesson1');

app.get('/', lesson1controller.homeroute); 

app.get('/Prosper', lesson1controller.Prosper); 

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});