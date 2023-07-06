const express = require('express');
const routes = express.Router();
const PropertyPermission = require('../models/propertyPermission')

function createRoute(){
    routes.post('/propertyPermission', async (req,res) => {
        console.log('create: ', req.body)
        await PropertyPermission.create(req.body)
       // console.log('usuario criado com sucesso')
        res.json([]);
    });
}

function findAllRoute(){

    routes.get('/propertyPermission', async (req,res) => {

        const propertyPermissions = await PropertyPermission.findAll();

        // console.log(usuarios.every(user => user instanceof Usuario)); // true
        // console.log("Todos usuarios: ", JSON.stringify(usuarios, null, 2));

        res.json(propertyPermissions);
    });
}

function findByIdRoute(){
    routes.get('/propertyPermission/:id', async (req,res) => {
        console.log(req.params.id)

        const foundPropertyPermission = await PropertyPermission.findOne({
            where:{
                id_user: req.params.id
            }
        })
        res.json(foundPropertyPermission);
    });
}

function updateRoute(){
    routes.put('/propertyPermission', async (req,res) => {
        
        console.log(req.body.id)

         await PropertyPermission.update(req.body, {
            where:{
                id_user:req.body.id
            }
        })
        res.json([]);
    });
}

function removeRoute(){
    routes.delete('/propertyPermission/:id', async (req,res) => {

        await PropertyPermission.destroy({
            where:{
                id_user:req.params.id
            }
        })
        res.json([]);
    });
}

function registerRoutesPropertyPermission(){
    findAllRoute();
    createRoute();
    removeRoute();
    updateRoute();
    findByIdRoute();
    return routes
}

module.exports = registerRoutesPropertyPermission