const { Router } = require('express')
const userRouter = require('../user.Router/user.Router')
const adminRouter = require('../admin.Router/admin.Router')
const toursRouter = require('../tours.Router/tours.Router')
const guideRouter = require('../guide.Router/guide.Router')

const mainRouter = Router()

mainRouter.use("/user", userRouter)
mainRouter.use("/guide", guideRouter)
mainRouter.use("/admin", adminRouter)
mainRouter.use("/tours", toursRouter)


module.exports = mainRouter