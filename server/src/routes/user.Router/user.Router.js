const { Router } = require('express');
const { check } = require('express-validator');

const { postUserHandler } = require('../../handlers/user.Handler/user.postHandler');
const { putUserHandler } = require('../../handlers/user.Handler/user.putHandler');
const { getUserHandler } = require('../../handlers/user.Handler/user.getHandler');
const { deleteUserHandler } = require('../../handlers/user.Handler/user.deleteHandler');
const { getAllUsersHandler } = require('../../handlers/user.Handler/user.getAllUsersHandler');
const { updateUserHandler } = require('../../handlers/user.Handler/user.updateUserHandler');

//* Raul.
const userRouter = Router();

userRouter.post("/", 
    [
        check('forename', `Name input should be filled`).not().isEmpty(),
        check('forename', 'Name input should be a string').isString(),
        check('forename', 'Name must be less than 25 characters').isLength({max: 25}),

        check('surname', `lastname input should be filled`).not().isEmpty(),
        check('surname', 'lastname input should be a string').isString(),
        check('surname', 'lastname must be less than 25 char').isLength({max: 25}),   
        
        check('auth0Id', 'auth0Id must be a string').optional().isString(),
        
        check('nationality', `nationality input should be filled`).optional().isString(),                    

        check('image', 'image should be an url').isURL(),
        check('birthDate', 'birthDate should be a date').optional().isISO8601(),            

        check('email', 'email input should be an email').isEmail(),

        check('admin', 'admin must be true or false').isBoolean(),

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

module.exports = userRouter;