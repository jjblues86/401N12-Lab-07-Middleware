'use strict';
/**
 *
 * @type {createApplication|createApplication}
 */
const express = require('express');
const errorMiddleware = require('./error');
const moment = require('moment');

const app = express();

// Jerome - set up a middleware before any route is defined.
// Jerome - Having an empty app.use will always result to a Global middleware

// Jerome - Write middleware that runs on every route that adds a property called requestTime with a value of the current Date/Time to the request object.

const requestTime = (req, res, next) => {
    req.requestTime = Date.now();
     console.log(`${req.requestTime}`);
    next();
};

app.use(requestTime);




const PORT = process.env.PORT || 8080;



app.get('/a', (req,res) => {
    res.status(200).send('Route A');
});

app.get('/b', (req,res) => {
    res.status(200).send('Route B');
});

app.get('/c', (req,res) => {
    res.status(200).send('Route C');
});

app.get('/d', (req,res) => {
    res.status(200).send('Route D');
});

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
