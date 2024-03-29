const { Router } = require('express')
const { check } = require('express-validator')


const { postToursHandler } = require('../../handlers/tours.Handler/tours.postHandler')
const { getAllToursHandler } = require('../../handlers/tours.Handler/tours.getHandler')
const { getToursHandler } = require('../../handlers/tours.Handler/tours.getByIdHandler')
const { getToursByNameHandler } = require('../../handlers/tours.Handler/tours.getByNameHandler')
const { getContinentHandler } = require('../../handlers/tours.Handler/tours.getByContinentHandler')
const { tagsHandler } = require('../../handlers/tours.Handler/tours.getTagsHandler')
const { purchasedTourHandler } = require('../../handlers/tours.Handler/tours.putPurchasedHandler')
const { putToursHandler } = require('../../handlers/tours.Handler/tours.putHandler')
const { deleteTourHandler } = require('../../handlers/tours.Handler/tours.deleteHandler')
const { putGuideTourHandler } = require('../../handlers/tours.Handler/tours.putGuideTour')
const { toursPutStatusHandler } = require('../../handlers/tours.Handler/tours.putStatusHandler')


const toursRouter = Router();

toursRouter.get("/tags", tagsHandler)
toursRouter.get("/continent", getContinentHandler)
toursRouter.get("/nameTour", getToursByNameHandler)
toursRouter.get("/:id", getToursHandler)
toursRouter.get("/", getAllToursHandler)


toursRouter.post("/", [

    check('nameTour', 'valid up to 50 characters').not().isEmpty().isString().isLength({ max: 50 }),
    check('initialDate', 'write a correct format (yyyy-mm-dd)').isISO8601(),
    check('endDate', 'write a correct format (yyyy-mm-dd)').isISO8601(),
    check('image', 'Invalidate URL').isURL(),
    check('country', 'valid up to 20 characters').not().isEmpty().isLength({ max: 20 }),
    check('city', 'valid up to 20 characters').not().isEmpty().isLength({ max: 20 }),
    check('type', 'valid up to 20 characters').not().isEmpty().isLength({ max: 20 }),
    check('capacity', 'characters is not a number').not().isEmpty().isNumeric(),
    check('capacity', 'max 2 numbers').not().isEmpty().isInt().isLength({ max: 2 }),
    check('description', 'it cant be empty').not().isEmpty(),
    check('season', 'valid up to 10 characters').not().isEmpty().isLength({ max: 10 }),
    check('status', 'select one of the options').optional().isBoolean(),
    check('price', 'Write only numbers').not().isEmpty().isNumeric().isLength({ min: 3, max: 10 }),
    check('equipment', 'valid up to 255 characters').not().isEmpty().isLength({ max: 255 }),
    check('guide', 'Guide input has to be uuid format').optional().isUUID(),
], postToursHandler)

toursRouter.put("/purchasedTour",
    [
        check('tourId', 'tourId has to be a UUID format').isUUID(),
        check('stock', 'stock has to be a number').isNumeric(),
        check('stock', 'stock can not be float').isInt()
    ],
    purchasedTourHandler
    );
    
toursRouter.put('/status', toursPutStatusHandler);
toursRouter.put('/:id', putToursHandler)
toursRouter.put('/postguidetour', putGuideTourHandler);
toursRouter.get("/", getAllToursHandler)
toursRouter.get("/nameTour", getToursByNameHandler)
toursRouter.get("/:id", getToursHandler)
toursRouter.delete("/:id", deleteTourHandler)

module.exports = toursRouter