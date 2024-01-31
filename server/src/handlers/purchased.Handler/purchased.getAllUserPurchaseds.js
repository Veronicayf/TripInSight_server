const { getAllUserPurchasedsController } = require("../../controllers/purchased/purchased.getAllUserPurchsedsControllers")
const { validationResult } = require('express-validator');

const getAllUserPurchasedsHandler = async(req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }
    
    const {id} = req.params;

    try {

        const response = await getAllUserPurchasedsController(id);

        if(response.error) throw response; 

        return res.json(response);

    } catch (error) {
        return res.status(400).json(error);
    }

}

module.exports = {
    getAllUserPurchasedsHandler
}