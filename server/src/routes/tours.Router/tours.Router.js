const { Router } = require('express')
const { postToursHandler } = require('../../handlers/tours.Handler/tours.postHandler')
const { check } = require('express-validator')


const { getAllToursHandler } = require('../../handlers/tours.Handler/tours.getHandler')
const { getToursHandler } = require('../../handlers/tours.Handler/tours.getByIdHandler')
const { getToursByNameHandler } = require('../../handlers/tours.Handler/tours.getByNameHandler')
const { getContinentHandler } = require('../../handlers/tours.Handler/tours.getByContinentHandler')
const { tagsHandler } = require('../../handlers/tours.Handler/tours.getTagsHandler')

// const { getToursByTypeHandler } = require()
// const { getToursByPriceHandler } = require()
// const { getToursByGuideHandler } = require()
// const { getToursByCountryHandler } = require()
const { putToursHandler } = require('../../handlers/tours.Handler/tours.putHandler')

const { deleteToursHandler } = require('../../handlers/tours.Handler/tours.deleteHandler')
const { putGuideTourHandler } = require('../../handlers/tours.Handler/tours.putGuideTour')


const toursRouter = Router();

toursRouter.get("/tags", tagsHandler)
toursRouter.get("/continent", getContinentHandler)
toursRouter.get("/nameTour", getToursByNameHandler) //coincidencias
toursRouter.get("/:id", getToursHandler)// AGREGAR CHECK UUID
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
    check('status', 'select one of the options').isBoolean(),
    check('price', 'Write only numbers').not().isEmpty().isNumeric().isLength({ min: 3, max: 10 }),
    check('equipment', 'valid up to 255 characters').not().isEmpty().isLength({ max: 255 }),

    check('guide', 'Guide input has to be uuid format').optional().isUUID(),
    // formatDates,  // Middleware para formatear las fechas antes de la validación






toursRouter.put('/postguidetour', putGuideTourHandler);


// toursRouter.post("/", [

//     check('nameTour', 'valid up to 50 characters').not().isEmpty().isString().isLength({ max: 50 }),

//     check('initialDate', 'write a correct formate (yyyy-mm-dd)').isISO8601(),
//     check('endDate', 'write a correct formate (yyyy-mm-dd)').isISO8601(),

//     check('image', 'Invalidate URL').isURL(),
//     check('country', 'valid up to 20 characters').not().isEmpty().isLength({ max: 20 }),
//     check('city', 'valid up to 20 charactere').not().isEmpty().isLength({ max: 20 }),
//     check('type', 'valid up to 20 character').not().isEmpty().isLength({ max: 20 }), //paisajes, animales, fotografia, safari.

//     check('capacity', 'characters is not a number').not().isEmpty().isNumeric(),
//     check('capacity', 'max 2 numbers').not().isEmpty().isInt().isLength({ max: 2 }),


//     check('description', 'valid up to 255 characters').not().isEmpty().isLength({ max: 255 }),
//     check('season', 'valid up to 10 characters').not().isEmpty().isLength({ max: 10 }), //summer, winter, spring, fall.

//     //!VERIFICAR CON LOS CHICOS________________________
//     check('status', 'select one of the options').isBoolean(), //true=Activo ó false=Inactivo

//     check('price', 'Write only numbers').not().isEmpty().isNumeric().isLength({ min: 3, max: 10 }),
//     check('equipment', 'valid up to 255 characters').not().isEmpty().isLength({ max: 255 }),
// ],
//     postToursHandler)


toursRouter.get("/", getAllToursHandler)
toursRouter.get("/nameTour", getToursByNameHandler) //coincidencias
toursRouter.get("/:id", getToursHandler)// AGREGAR CHECK UUID


// toursRouter.get("/", getToursByTypeHandler)
// toursRouter.get("/", getToursByPriceHandler)
// toursRouter.get("/", getToursByCountryHandler) 
// toursRouter.get("/", getToursByGuideHandler)
toursRouter.put("/", putToursHandler)
toursRouter.delete("/:id", deleteTourHandler)

module.exports = toursRouter