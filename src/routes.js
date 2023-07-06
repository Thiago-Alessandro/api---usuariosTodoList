const express =require ('express');
const router =  express.Router()

const registerRoutes = require('./usuarios/controllers/usuarios-controller')
router.use(registerRoutes())

const registerRoutesCardPermission = require('./usuarios/controllers/cardPermission-controller')
router.use(registerRoutesCardPermission())

const registerRoutesGroup = require('./usuarios/controllers/group-controller')
router.use(registerRoutesGroup())

const registerRoutesPropertyPermission = require('./usuarios/controllers/propertyPermission-controller')
router.use(registerRoutesPropertyPermission())

module.exports = router