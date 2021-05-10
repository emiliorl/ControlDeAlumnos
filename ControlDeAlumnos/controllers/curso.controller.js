'use strict'

var User = require('../models/user.model');
var Curso = require('../models/curso.model');

function setCurso(req, res){
    var userId = req.params.id;
    var params = req.body;
    var curso = new Curso();

    if(userId != req.user.sub){
        return res.status(500).send({message: 'No tienes permisos para realizar esta acción'})
    }else{
        User.findById(userId, (err, userFind)=>{
            if(err){
                return res.status(500).send({message: 'Error general'})
            }else if(userFind){
                curso.name = params.name;
                curso.lastname = params.grade;

                curso.save((err, cursoSaved)=>{
                    if(err){
                        return res.status(500).send({message: 'Error general al guardar'})
                    }else if(cursoSaved){
                        User.findByIdAndUpdate(userId, {$push:{cursos: cursoSaved._id}}, {new: true}, (err, cursoPush)=>{
                            if(err){
                                return res.status(500).send({message: 'Error general al agergar curso'})
                            }else if(cursoPush){
                                return res.send({message: 'Curso agregado', cursoPush});
                            }else{
                                return res.status(500).send({message: 'Error al agregar curso'})
                            }
                        })
                    }else{
                        return res.status(404).send({message: 'No se guardó el curso'})
                    }
                })
            }else{
                return res.status(404).send({message: 'El usuario al que deseas agregar el curso no existe.'})
            }
        })
    }
}

module.exports = {
    setCurso
}