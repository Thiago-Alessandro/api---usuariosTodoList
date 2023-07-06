const express = require('express');
const routes = express.Router();
const Group = require('../models/group')

function createRoute(){
    routes.post('/group', async (req,res) => {
        console.log('create: ', req.body)
        await Group.create(req.body)
       // console.log('usuario criado com sucesso')
        res.json([]);
    });
}

function findAllRoute(){

    routes.get('/group', async (req,res) => {

        const groups = await Group.findAll();

        // console.log(usuarios.every(user => user instanceof Usuario)); // true
        // console.log("Todos usuarios: ", JSON.stringify(usuarios, null, 2));

        res.json(groups);
    });
}

function findByIdRoute(){
    routes.get('/group/:id', async (req,res) => {
        console.log(req.params.id)

        const foundGroup = await Group.findOne({
            where:{
                id_user: req.params.id
            }
        })
        res.json(foundGroup);
    });
}

function updateRoute(){
    routes.put('/group', async (req,res) => {
        
        console.log(req.body.id)

         await Group.update(req.body, {
            where:{
                id_user:req.body.id
            }
        })
        res.json([]);
    });
}

function removeRoute(){
    routes.delete('/group/:id', async (req,res) => {

        await Group.destroy({
            where:{
                id_user:req.params.id
            }
        })
        res.json([]);
    });
}

function registerRoutesGroup(){
    findAllRoute();
    createRoute();
    removeRoute();
    updateRoute();
    findByIdRoute();
    return routes
}

module.exports = registerRoutesGroup