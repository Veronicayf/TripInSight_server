const { postUser } = require('../../controllers/User/user.postController');
const { validationResult } = require('express-validator');
//* Raul. 
const postUserHandler = async (req, res) => {

    const {forename, surname, nationality, image, birthDate, email, password, phoneNumber } = req.body;

    try {

        const errors = validationResult(req);
        if( !errors.isEmpty() ) {
            return res.status(400).json({
                ok: false,
                errors: errors.mapped()
            })
        }

        const user = await postUser( forename, surname, nationality, image, birthDate, email, password, phoneNumber );

        res.status(201).json(user);
        
    } catch (error) {
        res.status(404).json({error: error.message});
    }
}

module.exports = {
    postUserHandler,
}
