const express = require('express');
const config = require('config');
const router = express.Router();
const fibonacci = require('./fibonacci');

const FIBONACCI_PATH = config.get('server.path');
const RECURSIVE_PATH = config.get('server.recursivePath');

router.use(function timeLog (req, res, next) {
    // console.log(req);
    const timestamp = new Date();
    console.log(`Timestamp: ${timestamp.toISOString()}, url: ${req.originalUrl}`);
    next()
});

router.get(FIBONACCI_PATH, (req, res) => {
    //--get 'term' query param and calculate sequence value
    const {query:{term} = {term:undefined}} = req;
    if (isNaN(parseInt(term))) {
        res.status(400).send('Invalid or missing query param _term_');
    } else {
        res.send({term:term, value:fibonacci.goldenRatioFibonacci(parseInt(term))});
    }
});

router.get(RECURSIVE_PATH, (req, res) => {
    //--get 'term' query param and calculate sequence value
    const {query:{term} = {term:undefined}} = req;
    if (isNaN(parseInt(term))) {
        res.status(400).send('Invalid or missing query param _term_');
    } else {
        res.send({term:term, value:fibonacci.recursiveFibonacci(parseInt(term))});
    }
});

exports.router = router;
