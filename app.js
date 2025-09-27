
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const routes = require('./routes');
const { MongoClient } = require('mongodb');
const mongodb = require('./db/connection');

mongodb.initDb((err, db) => {
    if (err) {
        console.log(err);
    }else{
        app.listen(port, () => {
    console.log(`app listening at ${port}`);
});
    }});
app.use('/', routes);