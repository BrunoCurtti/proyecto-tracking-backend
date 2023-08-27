const figuritasController = require('../../../controllers/figuritasController');

const express = require('express');
const router = express.Router();

// Ruta para solicitar todas las figuritas a la base de datos
router.get('/figuritas', figuritasController.read);

// Ruta para solicitar actualizar las figuritas en la base de datos
router.put('/figuritas/:id', figuritasController.update);

module.exports = router;
