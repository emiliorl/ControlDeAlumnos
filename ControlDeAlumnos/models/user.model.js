'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = Schema({
    name: String,
    lastname: String,
    email: String,
    role: String,
    username: String,
    password: String,
    cursos: [{type: Schema.ObjectId, 
        ref: 'curso'}]
})

module.exports = mongoose.model('user', userSchema);