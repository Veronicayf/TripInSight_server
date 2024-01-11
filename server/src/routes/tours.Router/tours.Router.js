const { Router } = require('express')

const { postToursHandler } = require('../../handlers/tours.Handler/tours.postHandler')
const { getToursHandler } = require('../../handlers/tours.Handler/tours.getHandler')
// const { getToursByNameHandler } = require()
// const { getToursByTypeHandler } = require()
// const { getToursByPriceHandler } = require()
// const { getToursByGuideHandler } = require()
// const { getToursByCountryHandler } = require()
const { putToursHandler } = require('../../handlers/tours.Handler/tours.putHandler')
const { deleteToursHandler } = require('../../handlers/tours.Handler/tours.deleteHandler')

const toursRouter = Router()

userRouter.post("/", postToursHandler)
userRouter.get("/", getToursHandler)
// userRouter.get("/", getToursByNameHandler)
// userRouter.get("/", getToursByTypeHandler)
// userRouter.get("/", getToursByPriceHandler)
// userRouter.get("/", getToursByCountryHandler)
// userRouter.get("/", getToursByGuideHandler)
userRouter.put("/", putToursHandler)
userRouter.delete("/:id", deleteToursHandler)


module.exports = toursRouter