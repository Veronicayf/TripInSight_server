const { purchasedPostController } = require("../../controllers/purchased/purchased.postController");
const { validationResult } = require('express-validator');


const purchasedPostHandler = async(req, res) => {

    const {tourId, userId, initialDate, tickets, equipment, status, detail, totalPrice} = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }

    try {

        const response = await purchasedPostController(tourId, userId, initialDate, tickets, equipment, status, detail, totalPrice);

        if(response.error) throw response;
        
        res.json(response);

    } catch (error) {

        res.status(400).json(error);

    }

}

module.exports = {
    purchasedPostHandler
}