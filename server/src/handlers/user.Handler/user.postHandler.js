const { postUser } = require('../../controllers/User/user.postController');
const { validationResult } = require('express-validator');


//* Raul. 
const postUserHandler = async (req, res) => {

    const { auth0Id, name, nationality, image, birthDate, email, phoneNumber, admin } = req.body;

    try {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                ok: false,
                errors: errors.mapped()
            })
        }

        const newUser = await postUser(auth0Id, name, nationality, image, birthDate, email, admin, phoneNumber);        
        
        
        return res.status(201).json(newUser);

    } catch (error) {        
        res.status(404).json({ error: error.message });
    }
}

module.exports = {
    postUserHandler,
}
