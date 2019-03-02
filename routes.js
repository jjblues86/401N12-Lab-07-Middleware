'use strict';

const express = require('express');
const router = express.Router();


// Jerome - Create a router in a separate file called routes.js

// Jerome - Write middleware that runs only on the /c route that performs an additional console.log() with a randomly generated number

const randomNum = (req,res,next) => {
   console.log(Math.floor(Math.random() * 50));

    next();
};

// Jerome - Write middleware that runs on the /d route that raises an error using next

const raiseError = (req, res, next) => {
    next('This is an error!');
};

// C and D routes

router.get('/c', randomNum, (req,res) => {
    // console.log(`Request Type: ${req.randomNum}`);

    res.status(200).send('Route C');
});


router.get('/d', raiseError, (req,res) => {
    res.status(200).send('Route D');

});


module.exports = router;
