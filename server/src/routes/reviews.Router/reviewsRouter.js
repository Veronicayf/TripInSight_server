const { Router } = require('express');
const { check } = require('express-validator');

const { reviewTourHandler } = require('../../handlers/reviews.Handler/reviews.postHandler');
const { getAllReviewsHandler } = require('../../handlers/reviews.Handler/reviews.getAllHandler')
const { getUserReviewsHandler } = require('../../handlers/reviews.Handler/revies.getByUserHandler')
const { getTourReviewsHandler } = require('../../handlers/reviews.Handler/reviews.getByTourHandler')

const reviewsRouter = Router();


reviewsRouter.post("/", 
    [
        check('idUser', 'The user id must be UUID format').isUUID().not().isEmpty(),
        check('idTour', 'The Tour id must be UUID format').isUUID().not().isEmpty(),
        check('review', 'The review ust be a not empty string' ).not().isEmpty().isString()
    ],
    reviewTourHandler);
    
reviewsRouter.get("/", getAllReviewsHandler)

reviewsRouter.get("/user/:id",
    [
        check('id', 'id must be UUID format').isUUID(),
    ],
getUserReviewsHandler)

reviewsRouter.get("/tour/:id",
    [
        check('id', 'id must be UUID format').isUUID(),
    ], 
getTourReviewsHandler)



module.exports =  reviewsRouter 