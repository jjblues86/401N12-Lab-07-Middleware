'use strict';

/**
 * A basic middleware error handler that returns 500 by default
 * @param error
 * @param req
 * @param res
 * @param next
 */

module.exports = (error, req, res, next) => {
    console.log('This is an error handler');
    res.status(500).send('ERROR');
};