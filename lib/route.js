const express = require('express');
const config = require('config');
const router = express.Router();

const FIBONACCI_PATH = config.get('server.path');

router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
});

router.get(FIBONACCI_PATH, (req, res) => {
    res.send('Under Construction');
});

exports.router = router;
