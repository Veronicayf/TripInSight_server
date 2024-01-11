const { Router } = require('express')
const userRouter = require('../user.Router/user.Router')
const adminRouter = require('../admin.Router/admin.Router');
const toursRouter = require('../tours.Router/tours.Router')
//const guidesRouter = require('../guides_Router/guidesRouter')

const mainRouter = Router()
console.log('router principal');
mainRouter.use("/user", userRouter)
mainRouter.use("/admin", adminRouter)
mainRouter.use("/tours", toursRouter)
//! mainRouter.use("/guides", guidesRouter)

module.exports = mainRouter