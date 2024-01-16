const { getContinentController } = require('../../controllers/tours/tours.getByContinentController')
const { validationResult } = require('express-validator')

const getContinentHandler = async (req, res) => {

    try {
        const { continent } = req.query;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                ok: false,
                errors: errors.mapped(),
            });
        }

        const tours = await getContinentController(continent);
        return res.status(200).json(tours)

    } catch (error) {
        res.status(404).json({
            ok: false,
            errors: {
                continent: {
                    type: 'field',
                    value: req.query.continent,
                    msg: error.message,
                    path: 'continent',
                    location: 'query',
                },
            },
        });
    }

}
module.exports = {
    getContinentHandler
}