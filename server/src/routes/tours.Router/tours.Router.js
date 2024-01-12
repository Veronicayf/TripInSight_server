const { Router } = require('express')
const { postToursHandler } = require('../../handlers/tours.Handler/tours.postHandler')
const { check } = require('express-validator')

const { getToursHandler, getAllToursHandler } = require('../../handlers/tours.Handler/tours.getHandler')
// const { getToursByNameHandler } = require()
// const { getToursByTypeHandler } = require()
// const { getToursByPriceHandler } = require()
// const { getToursByGuideHandler } = require()
// const { getToursByCountryHandler } = require()
const { putToursHandler } = require('../../handlers/tours.Handler/tours.putHandler')
const { deleteToursHandler } = require('../../handlers/tours.Handler/tours.deleteHandler')



const toursRouter = Router()

toursRouter.post("/", [

    check('nameTour', 'valid up to 50 characters').not().isEmpty().isString().isLength({ max: 50 }),
    check('initialDate', 'write a correct formate (yyyy-mm-dd)').isISO8601(),
    check('endDate', 'write a correct formate (yyyy-mm-dd)').isISO8601(),
    check('image', 'Invalidate URL').isURL(),
    check('country', 'valid up to 20 characters').not().isEmpty().isLength({ max: 20 }),
    check('city', 'valid up to 20 charactere').not().isEmpty().isLength({ max: 20 }),
    check('type', 'valid up to 20 character').not().isEmpty().isLength({ max: 20 }), //paisajes, animales, fotografia, safari.

    check('capacity', 'characters is not a number').not().isEmpty().isNumeric(),
    check('capacity', 'max 2 numbers').not().isEmpty().isInt().isLength({ max: 2 }),


    check('description', 'valid up to 255 characters').not().isEmpty().isLength({ max: 255 }),
    check('season', 'valid up to 10 characters').not().isEmpty().isLength({ max: 10 }), //summer, winter, spring, fall.

    //!VERIFICAR CON LOS CHICOS________________________
    check('status', 'select one of the options').isBoolean(), //true=Activo ó false=Inactivo

    check('price', 'Write only numbers').not().isEmpty().isNumeric().isLength({ min: 3, max: 10 }),
    check('equipment', 'valid up to 255 characters').not().isEmpty().isLength({ max: 255 }),
],
    postToursHandler)


toursRouter.get("/:id", getToursHandler)// AGREGAR CHECK UUID
toursRouter.get("/", getAllToursHandler)

// toursRouter.get("/", getToursByNameHandler) //coincidencias
// toursRouter.get("/", getToursByTypeHandler)
// toursRouter.get("/", getToursByPriceHandler)
// toursRouter.get("/", getToursByCountryHandler) //filtro por paises
// toursRouter.get("/", getToursByGuideHandler)
toursRouter.put("/", putToursHandler)
toursRouter.delete("/:id", deleteToursHandler)

module.exports = toursRouter