const express = require('express');
const router = express.Router();

const crudRouter = require('./crud');
const reportingRouter = require('./reports');

// Separo en 2 rutas para organizar el código de forma más rolija, para un lado el crud y por el otro los reportes para las consultas a la base de datos.
router.use('/', crudRouter);
router.use('/', reportingRouter);

module.exports = router;