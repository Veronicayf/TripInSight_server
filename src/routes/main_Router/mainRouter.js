const {Router}=require('express')
const userRouter = require('../user_Router/userRouter')
const adminRouter = require('../admin_Router/adminRouter')
const toursRouter = require('../tours_Router/toursRouter')
//const guidesRouter = require('../guides_Router/guidesRouter')

const mainRouter = Router()

mainRouter.use("/user", userRouter)
mainRouter.use("/admin", adminRouter)
mainRouter.use("/tours", toursRouter)
//mainRouter.use("/guides", guidesRouter)

module.exports = mainRouter