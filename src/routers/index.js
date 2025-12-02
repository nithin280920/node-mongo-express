const express = require('express');
const router = express.Router();

const userRoute = require('./userRoute');

// Use user routes
router.use('/user', userRoute);


module.exports = router;