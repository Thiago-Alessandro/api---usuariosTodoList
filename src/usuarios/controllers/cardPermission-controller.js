const express = require('express');
const routes = express.Router();
const CardPermission = require('../models/cardPermission')

function createRoute(){
    routes.post('/cardPermission', async (req,res) => {
        console.log('create: ', req.body)
        await CardPermission.create(req.body)
       // console.log('usuario criado com sucesso')
        res.json([]);
    });
}

function findAllRoute(){

    routes.get('/cardPermission', async (req,res) => {

        const cardPermissions = await CardPermission.findAll();

        // console.log(usuarios.every(user => user instanceof Usuario)); // true
        // console.log("Todos usuarios: ", JSON.stringify(usuarios, null, 2));

        res.json(cardPermissions);
    });
}

function findByIdRoute(){
    routes.get('/cardPermission/:id', async (req,res) => {
        console.log(req.params.id)

        const foundCardPermission = await CardPermission.findOne({
            where:{
                id_user: req.params.id
            }
        })
        res.json(foundCardPermission);
    });
}

function updateRoute(){
    routes.put('/cardPermission', async (req,res) => {
        
        console.log(req.body.id)

         await CardPermission.update(req.body, {
            where:{
                id_user:req.body.id
            }
        })
        res.json([]);
    });
}

function removeRoute(){
    routes.delete('/cardPermission/:id', async (req,res) => {

        await CardPermission.destroy({
            where:{
                id_user:req.params.id
            }
        })
        res.json([]);
    });
}

function registerRoutesCardPermission(){
    findAllRoute();
    createRoute();
    removeRoute();
    updateRoute();
    findByIdRoute();
    return routes
}

module.exports = registerRoutesCardPermission