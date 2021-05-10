'use strict'

var express = require('express');
var cursoController = require('../controllers/curso.controller');
var mdAuth = require('../middlewares/authenticated');

var api = express.Router();

api.put('/setCurso/:id', mdAuth.ensureAuth,  cursoController.setCurso);

module.exports = api;