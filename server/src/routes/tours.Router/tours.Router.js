const { Router } = require('express')
const { postToursHandler } = require('../../handlers/tours.Handler/tours.postHandler')
const toursRouter = Router()

toursRouter.post("/", postToursHandler)
toursRouter.get("/", getToursHandler)
// toursRouter.get("/", getToursByNameHandler)
// toursRouter.get("/", getToursByTypeHandler)
// toursRouter.get("/", getToursByPriceHandler)
// toursRouter.get("/", getToursByCountryHandler)
// toursRouter.get("/", getToursByGuideHandler)
toursRouter.put("/", putToursHandler)
toursRouter.delete("/:id", deleteToursHandler)

module.exports = toursRouter