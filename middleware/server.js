'use strict';
/**
 *
 * @type {createApplication|createApplication}
 */
const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();
const router = require('./routes.js');
const moment = require('moment');



// Jerome - set up a middleware before any route is defined.
// Jerome - Having an empty app.use will always result to a Global middleware

// Jerome - Write middleware that runs on every route that adds a property called requestTime with a value of the current Date/Time to the request object.

app.use((req, res, next) => {
    req.requestTime = Date();

    next();
});



app.use((req,res,next) => {
    console.log(`Request Type: ${req.method}`);
    console.log(`Request Type: ${req.requestTime}`);
    console.log(`Request Type: ${req.path}`);
    console.log(`Request Type: ${moment().format()}`);

    next();

});

// Jerome - Write middleware that runs on the and /b route that takes a number as a parameter, squares it, and and sets that value on the request object in a property called number.
// Alter the /b route to .send() that number from the request object to the browser.

const squareNum = (num) => {
    return function(req,res,next) {
        req.num = num ** 2;
        next();
    };
};


app.get('/a', (req,res) => {
    res.status(200).send('Route A');
});



app.get('/b', squareNum(12), (req,res) => {
    res.status(200).send(`Route B - num: ${req.num}`);
});


app.use('/', router);


// Jerome - Write error handling middleware
app.use((error, req, res, next) => {
    console.error('This is an error handler');
    res.status(500).send('ERROR');
    next();
});



// Jerome - Write not found middleware and a catch-all route that uses it.
app.use('/*',(req,res) => {
    console.log('Unknown Route');
    res.status(404).send('Page is not found');
    res.end();
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
