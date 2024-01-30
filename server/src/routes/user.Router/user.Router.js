const { Router } = require('express');
const { check } = require('express-validator');

const { postUserHandler } = require('../../handlers/user.Handler/user.postHandler');
const { getUserHandler } = require('../../handlers/user.Handler/user.getHandler');
const { deleteUserHandler } = require('../../handlers/user.Handler/user.deleteHandler');
const { getAllUsersHandler } = require('../../handlers/user.Handler/user.getAllUsersHandler');
const { updateUserHandler } = require('../../handlers/user.Handler/user.updateUserHandler');
const { getAllFavsHandler } = require('../../handlers/user.Handler/user.getAllFavsHandler');
const { addFavoriteHandler } = require('../../handlers/user.Handler/user.addfavoriteHandler');
const { deleteFavoriteHandler } = require('../../handlers/user.Handler/user.deletefavoriteHandler');

const { subscriptionHandler } = require('../../handlers/user.Handler/user.postSubscription');

//* Raul.
const userRouter = Router();

userRouter.post("/",
    [
        check('name', 'name has to be a string').isString().not().isEmpty(),

        check('auth0Id', 'auth0Id must be a string').optional().isString(),

        check('nationality', `nationality input should be filled`).optional().isString(),

        check('image', 'image should be an url').isURL(),
        check('birthDate', 'birthDate should be a date').optional().isISO8601(),

        check('email', 'email input should be an email').isEmail(),

        check('admin', 'admin must be true or false').optional().isBoolean(),

        check('phoneNumber', 'phoneNumber should be an integer').optional().isString(),
    ],
    postUserHandler
);

userRouter.post("/subscribe",
    [
        check('email', 'enter a valid email').isEmail(),
    ],
    subscriptionHandler);

userRouter.put('/updateuser',
    [
        check('idUser', 'idUser must be an uuid format').isUUID(),

        check('nationality', 'Nationality must be string').optional().isString(),

        check('birthDate', 'birthDate should be a date').optional().isISO8601(),

        check('phoneNumber', 'Phone number must be string').optional().isString(),

        check('image', 'image must be an url').isURL().optional()
    ],
    updateUserHandler
);

userRouter.get("/all", getAllUsersHandler);

userRouter.get("/allfavs/:id", getAllFavsHandler)

userRouter.put("/addfavorite",
    [
        check('tourId', 'idTour must be an uuid format').isUUID(),
        check('userId', 'userId must be an uuid format').isUUID()
    ],
    addFavoriteHandler
);
userRouter.delete('/deletefavoritetour', deleteFavoriteHandler);

userRouter.get("/getuser/:id",


    [
        check('id', 'id must be UUID format').isUUID(),
    ],
    getUserHandler
);


userRouter.delete("/:id",
    [
        check('id', 'id must be UUID format').isUUID()
    ],
    deleteUserHandler
);


module.exports = userRouter;