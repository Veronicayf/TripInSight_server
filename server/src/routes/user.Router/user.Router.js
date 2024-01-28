const { Router } = require('express');
const { check } = require('express-validator');

const { postUserHandler } = require('../../handlers/user.Handler/user.postHandler');
const { putUserHandler } = require('../../handlers/user.Handler/user.putHandler');
const { getUserHandler } = require('../../handlers/user.Handler/user.getHandler');
const { deleteUserHandler } = require('../../handlers/user.Handler/user.deleteHandler');
const { getAllUsersHandler } = require('../../handlers/user.Handler/user.getAllUsersHandler');
const { updateUserHandler } = require('../../handlers/user.Handler/user.updateUserHandler');
const { getAllFavsHandler } = require('../../handlers/user.Handler/user.getAllFavsHandler');
const { addFavoriteHandler } = require('../../handlers/user.Handler/user.addfavoriteHandler');
const { deleteFavoriteHandler } = require('../../handlers/user.Handler/user.deletefavoriteHandler');
const { addPurchasedHandler } = require('../../handlers/user.Handler/user.purchasedHandler');

// const { addPurchasedHandler } = require('../../handlers/user.Handler/user.addPurchasedHandler');


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

userRouter.put('/updateuser',  
    [
        check('idUser', 'idUser must be an uuid format').isUUID(),

        check('nationality', 'Nationality must be string').optional().isString(),
        
        check('birthDate', 'birthDate should be a date').optional().isISO8601(),

        check('phoneNumber', 'Phone number must be string').optional().isString(),
    ],
    updateUserHandler
)

userRouter.get("/all", getAllUsersHandler);

userRouter.get("/allfavs", getAllFavsHandler)

userRouter.put("/addfavorite", 
    [
        check('tourId', 'idTour must be an uuid format').isUUID(),
        check('userId', 'userId must be an uuid format').isUUID()
    ],
    addFavoriteHandler
);
userRouter.delete('/deletefavoritetour', deleteFavoriteHandler);


userRouter.put('/addpurchased', 
    [
        check('tourId', 'idTour must be an uuid format').isUUID(),
        check('userId', 'userId must be an uuid format').isUUID()
    ],
    addPurchasedHandler
);



userRouter.get("/getuser/:id", 

    [
        check('id', 'id must be UUID format').isUUID(),
    ],
    getUserHandler
);

userRouter.put("/",
    [
        check('id', 'id must be UUID format').isUUID(),                  
    ],
    putUserHandler
);
    

userRouter.delete("/:id", 
    [
        check('id', 'id must be UUID format').isUUID()
    ],
    deleteUserHandler
);

userRouter.post("/postpurchased", addPurchasedHandler);

module.exports = userRouter;