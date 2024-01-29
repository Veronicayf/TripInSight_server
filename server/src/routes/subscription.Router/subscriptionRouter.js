const { Router } = require('express')
// const { check } = require('express-validator')


const { subscriptionHandler } = require('../../handlers/subscriptions/subscription.post.handler')

const subscriptionRouter = Router();

subscriptionRouter.post("/", subscriptionHandler)

module.exports = subscriptionRouter

