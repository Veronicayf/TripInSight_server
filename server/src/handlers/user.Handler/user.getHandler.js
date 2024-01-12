const { getUserById } = require('../../controllers/User/user.getController');
const { validationResult } = require('express-validator');

const getUserHandler = async (req, res) => {
        
    const { id } = req.params
      
    const errors = validationResult(req);

    if( !errors.isEmpty() ) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }

    try {
        const user = await getUserById( id );        
        if(!user) throw Error (`The user with the id : ${id} does not exist`);

        return res.status(200).json(user);
        
    } catch (error) {
        return res.status(404).json({
            ok: false,
            errors: {
                id: {
                    type: "field",
                    value: id,
                    msg: error.message,
                    path: "id",
                    location: "params"
                }
            },
        })
    }
}


module.exports = {
    getUserHandler,
}
