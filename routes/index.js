const routes = require('express').Router();
const controllers = require('../controllers/db');

routes.get('/contact/:id', controllers.contact);
routes.get('/contacts', controllers.contacts);
routes.post('/contact', controllers.createContact);
routes.put('/contact/:id', controllers.updateContact);
routes.delete('/contact/:id', controllers.deleteContact);

module.exports = routes;
