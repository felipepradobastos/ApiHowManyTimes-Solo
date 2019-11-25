const express = require('express');
const routes = express.Router();


//Controllers
const UserController = require('./src/Controllers/UserController');

routes.post('/register', UserController.criarUsuario);
routes.delete('/remove', UserController.removerUsuario);
routes.put('/edit', UserController.editarUsuario);
routes.post('/login', UserController.login);

module.exports = routes;