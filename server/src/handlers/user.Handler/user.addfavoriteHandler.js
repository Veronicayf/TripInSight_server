const { addFavoriteController } = require("../../controllers/User/user.addFavoriteControllers");
const { validationResult } = require('express-validator');


const addFavoriteHandler = async(req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }

    try{
        const {tourId, userId} = req.body;

        const response = await addFavoriteController(tourId, userId);
        
        return res.json(response);

    }catch(error){
        
       return res.status(404).json(error);
    }

}

module.exports = {
    addFavoriteHandler
}