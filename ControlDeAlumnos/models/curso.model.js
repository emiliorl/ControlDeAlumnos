'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cursoSchema = Schema({
    name: String,
    grade: String
})

module.exports = mongoose.model('curso', cursoSchema);