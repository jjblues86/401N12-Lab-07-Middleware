'use strict';

const express = require('express');
const router = express.Router();


// Jerome - Create a router in a separate file called routes.js

// Jerome - Write middleware that runs only on the /c route that performs an additional console.log() with a randomly generated number

const randomNum = (req,res,next,min,max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    req.randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`Request Type: ${req.randomNum}`);
    next();
};

// Jerome - Write middleware that runs on the /d route that raises an error using next

const raiseError = (error, req, res, next) => {
    next();
};

// C and D routes

router.get('/c', randomNum, (req,res) => {

    res.status(200).send('Route C');
});


router.get('/d', (req,res,next) => {
    next();
    res.status(200).send('Route D');

});


module.exports = router;