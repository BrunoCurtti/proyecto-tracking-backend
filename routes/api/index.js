const express = require('express');
const router = express.Router();

const figuritasRouter = require('./figuritas');

router.use('/figuritas', figuritasRouter);

module.exports = router;