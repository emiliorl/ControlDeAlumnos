'use strict'

var express = require('express');
var userController = require('../controllers/user.controller');
var mdAuth = require('../middlewares/authenticated');

var api = express.Router();

api.post('/saveUser', userController.saveUser);
/* api.get('/getUsers', userController.getUsers);
api.get('/getUser/:id', userController.getUser); */
api.put('/updateUser/:id', mdAuth.ensureAuth,  userController.updateUser);
/* api.delete('/removeUser/:id', userController.removeUser); */
api.post('/login', userController.login);

module.exports = api;