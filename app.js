
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const routes = require('./routes');
const mongodb = require('./db/connection');
const bodyParser = require('body-parser');

mongodb.initDb((err, db) => {
    if (err) {
        console.log(err);
    }else{
        app.listen(port, () => {
    console.log(`app listening at ${port}`);
});
    }});
    app.use(bodyParser.json()).use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
    }).use('/', routes);