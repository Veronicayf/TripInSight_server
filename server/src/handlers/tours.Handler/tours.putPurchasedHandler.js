const { purchasedTour } = require('../../controllers/tours/tours.putPurchasedController');
const { validationResult } = require('express-validator')
const purchasedTourHandler = async (req, res) => {

    const { tourId, stock } = req.body

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }

    try {

        const response = await purchasedTour(tourId, stock);

        return res.json(response);

    } catch (error) {

        return res.status(400).json(error);

    }

}

module.exports = {
    purchasedTourHandler
}