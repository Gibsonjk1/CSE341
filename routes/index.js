const routes = require('express').Router();
const lesson1controller = require('../controllers/lesson1');

routes.get('/', lesson1controller.homeroute);
routes.get('/Prosper', lesson1controller.Prosper);

module.exports = routes;
