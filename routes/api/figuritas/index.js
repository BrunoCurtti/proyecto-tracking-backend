const express = require('express');
const router = express.Router();

const crudRouter = require('./crud');

router.use('/', crudRouter);

module.exports = router;