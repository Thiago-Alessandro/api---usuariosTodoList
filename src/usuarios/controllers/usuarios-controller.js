const express = require('express');
const routes = express.Router();
const Usuario = require('../models/usuario')

function createRoute(){
    routes.post('/usuarios', async (req,res) => {
        console.log('create: ', req.body)
        await Usuario.create(req.body)
       // console.log('usuario criado com sucesso')
        res.json([]);
    });
}

function findAllRoute(){
    routes.get('/usuarios', (req,res) => {
        res.json([]);
    });
}

function findByIdRoute(){
    routes.get('/usuarios/:meuParametro', (req,res) => {
        console.log(req.params)
        res.json([]);
    });
}

function updateRoute(){
    routes.put('/usuarios', (req,res) => {
        console.log(req.body)
        res.json([]);
    });
}

function removeRoute(){
    routes.delete('/usuarios/:meuParametro', (req,res) => {
        console;log(req.params)
        res.json([]);
    });
}


function registerRoutes(){
    findAllRoute();
    createRoute();
    removeRoute();
    updateRoute();
    findByIdRoute();
    return routes
}


module.exports = registerRoutes