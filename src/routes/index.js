const express = require('express');

const PetController = require('../controllers/pet.controller');

const routes = express.Router();

routes.post('/create', PetController.create);
routes.get('/get', PetController.get);
routes.get('/get-all', PetController.getAll);

module.exports = routes;
