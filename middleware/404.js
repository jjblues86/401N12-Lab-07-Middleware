'use strict';

/**
 * This middleware only fires if you define it last in the chain in your server.
 * This sends an error message to a user who wants to access a page that was not found
 * @param req
 * @param res
 * @param next
 */

module.exports = (req, res, next) => {
    console.log('Unknown Route');
    res.status(404).send('Page is not found');
    res.end();
};