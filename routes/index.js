const express = require('express');
const router = express.Router();

const api = require('./api/figuritas/crud');

router.use('/api', api);


module.exports = router;