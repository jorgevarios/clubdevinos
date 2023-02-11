const express = require('express');
const usersRouter = express.Router();
const usersController = require('../controllers/usersController');

usersRouter.post('/login', usersController.login);
usersRouter.get('/login', usersController.login);

module.exports = usersRouter;

