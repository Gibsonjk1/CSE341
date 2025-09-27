const routes = require('express').Router();
const controllers = require('../controllers/db');

routes.get('/contact/:id', controllers.contact);
routes.get('/contacts', controllers.contacts);

module.exports = routes;
