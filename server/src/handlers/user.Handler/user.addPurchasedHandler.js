const { addPurchasedController } = require("../../controllers/User/user.addPurchasedControllers");
const { validationResult } = require('express-validator');


const addPurchasedHandler = async(req, res) => {

    const {tourId, userId} = req.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }
    
    try {
        
        const response = await addPurchasedController(tourId, userId);

        return res.json(response);
    } catch (error) {
        return res.status(400).json(error);
    }

}

module.exports = {
    addPurchasedHandler
}