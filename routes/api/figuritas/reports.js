const figuritasController = require('../../../controllers/figuritasController');

const express = require('express');
const router = express.Router();

// Ruta para solicitar las figuritas que faltan completar en la base de datos
router.get('/consultar-figuritas-faltan', figuritasController.getMissedFigs);

// Ruta para solicitar las figuritas que hay repetidas en la base de datos
router.get('/consultar-figuritas-repetidas', figuritasController.getRepetedFigs);


module.exports = router;