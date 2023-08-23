const figuritasController = require('../../../controllers/figuritasController');

const express = require('express');
const router = express.Router();

router.get('/figuritas', figuritasController.list);
router.put('/figuritas/:id', figuritasController.update);

module.exports = router;
