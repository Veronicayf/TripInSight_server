const { Router } = require('express');
const { check } = require('express-validator');

const { purchasedPostHandler } = require('../../handlers/purchased.Handler/purchased.postHandler');
const { getPurchasedByIdHandler } = require('../../handlers/purchased.Handler/purchasedGetByIdHandler');
const { getAllPurchasedHandler } = require('../../handlers/purchased.Handler/purchased.getAllHandler');

const purchasedRouter =  Router();

purchasedRouter.post("/", 
    [
        check('tourId','tourId has to be a uuid format').isUUID(),
        check('userId','userId has to be a uuid format').isUUID(),
        check('initialDate','initialDate has to be this format yyyy-mm-dd').isISO8601(),
        check('tickets','tickets has to be an integer').isInt(),
        check('equipment','equipment has to be a string').isString().notEmpty(),
        check('status','status has to be true || false').isBoolean(),
        check('detail','detail has to be a string').isString().notEmpty(),
        check('totalPrice','totaPrice has to be an integer').isInt(),
    ],
    purchasedPostHandler
);

purchasedRouter.get('/getpurchased/:id',
    [
        check('id','id has to be a uuid format').isUUID(),
    ],
    getPurchasedByIdHandler
);

purchasedRouter.get('/all', getAllPurchasedHandler)

module.exports = purchasedRouter;