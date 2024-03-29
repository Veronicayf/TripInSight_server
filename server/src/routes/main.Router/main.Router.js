const { Router } = require('express')
const userRouter = require('../user.Router/user.Router')

const adminRouter = require('../admin.Router/admin.Router');

const toursRouter = require('../tours.Router/tours.Router');
const guideRouter = require('../guide.Router/guide.Router');
const purchasedRouter = require('../purchased.Router/purchased.Router');
const reviewsRouter = require('../reviews.Router/reviewsRouter');
const { loadGuideToDb, loadToursToDb } = require('../../sync/loadInfoToDb');

const mainRouter = Router()
console.log('router principal');
mainRouter.use("/user", userRouter)
mainRouter.use("/guides", guideRouter)
mainRouter.use("/admin", adminRouter)
mainRouter.use("/tours", toursRouter)
mainRouter.use("/purchased", purchasedRouter)
mainRouter.use("/reviews", reviewsRouter)

mainRouter.get('/load', (req, res) => {
    loadGuideToDb();
    loadToursToDb();
    return res.json({msg: 'carga exitosa'});
});

module.exports = mainRouter

