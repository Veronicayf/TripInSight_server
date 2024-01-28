const { Router } = require('express');
const { check } = require('express-validator');

const { reviewTourHandler } = require('../../handlers/user.Handler/user.postReviewTourHandler');

const reviewsRouter = Router();


reviewsRouter.post("/", 
    [
        check('idUser', 'The user id must be UUID format').isUUID().not().isEmpty(),
        check('idTour', 'The Tour id must be UUID format').isUUID().not().isEmpty(),
        check('review', 'The review ust be a not empty string' ).not().isEmpty().isString()
    ],
reviewTourHandler);