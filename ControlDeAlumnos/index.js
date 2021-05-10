'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3200;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ControlAlumnos',{useNewUrlParser : true, useUnifiedTopology:true})
    .then(() =>{
        console.log('Connectado a la DB');
        app.listen(port, ()=>{
            console.log('Servidor de express esta corriendo')
        })
    }).catch((err) =>{
        console.log('Error al conectarse a la DB' + err)
    });