const { Router } = require('express');
const { check } = require('express-validator');

const { postUserHandler } = require('../../handlers/user.Handler/user.postHandler');
const { putUserHandler } = require('../../handlers/user.Handler/user.putHandler');
const { getUserHandler } = require('../../handlers/user.Handler/user.getHandler');
const { deleteUserHandler } = require('../../handlers/user.Handler/user.deleteHandler');
const { getAllUsersHandler } = require('../../handlers/user.Handler/user.getAllUsersHandler');

//* Raul
const userRouter = Router();

userRouter.post("/", 
    [
        check('forename', `Name input should be filled`).not().isEmpty(),
        check('forename', 'Name input should be a string').isString(),
        check('forename', 'Name must be less than 25 characters').isLength({max: 25}),

        check('surname', `lastname input should be filled`).not().isEmpty(),
        check('surname', 'lastname input should be a string').isString(),
        check('surname', 'lastname must be less than 25 char').isLength({max: 25}),            

        check('nationality', `nationality input should be filled`).not().isEmpty(),                    

        //TODO: check('image', 'image should be an url').isURL(), para cuando esten listas las imagenes

        check('birthDate', 'birthDate should be a date').isISO8601(),            

        check('email', 'email input should be an email').isEmail(),

        //TODO: checar la opcion de guardar password.

        check('phoneNumber', 'phoneNumber should be an integer').isInt(),            
    ], 
    postUserHandler);


userRouter.get("/all", getAllUsersHandler);

userRouter.get("/getuser/:id", 

    [
        check('id', 'id must be UUID format').isUUID(),
    ],
    getUserHandler);

userRouter.put("/",
    [
        check('id', 'id must be UUID format').isUUID(),                  
    ],
    putUserHandler);
    

userRouter.delete("/:id", deleteUserHandler);

module.exports = userRouter;