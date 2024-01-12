const { Router } = require('express')
const { postToursHandler } = require('../../handlers/tours.Handler/tours.postHandler')
const { check } = require('express-validator')

const { getToursHandler } = require('../../handlers/tours.Handler/tours.getHandler')
// const { getToursByNameHandler } = require()
// const { getToursByTypeHandler } = require()
// const { getToursByPriceHandler } = require()
// const { getToursByGuideHandler } = require()
// const { getToursByCountryHandler } = require()
const { putToursHandler } = require('../../handlers/tours.Handler/tours.putHandler')
const { deleteToursHandler } = require('../../handlers/tours.Handler/tours.deleteHandler')



const toursRouter = Router()

toursRouter.post("/", [
    check('nameTour', 'nombre no valido').not().isEmpty().isString(),
],
    postToursHandler)


toursRouter.get("/", getToursHandler)
// toursRouter.get("/", getToursByNameHandler)
// toursRouter.get("/", getToursByTypeHandler)
// toursRouter.get("/", getToursByPriceHandler)
// toursRouter.get("/", getToursByCountryHandler)
// toursRouter.get("/", getToursByGuideHandler)
toursRouter.put("/", putToursHandler)
toursRouter.delete("/:id", deleteToursHandler)

module.exports = toursRouter