const { tagsController } = require('../../controllers/tours/tours.getTagsController');
const { validationResult } = require('express-validator');

const tagsHandler = async (req, res) => {
    try {
        const { tags } = req.query;

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                ok: false,
                errors: errors.mapped(),
            });
        }

        const tours = await tagsController(tags);
        return res.status(200).json(tours);

    } catch (error) {
        res.status(404).json({
            ok: false,
            errors: {
                tags: {
                    type: 'field',
                    msg: error.message,
                    path: 'tags',
                    location: 'query'
                },
            },
        });
    }
};

module.exports = {
    tagsHandler,
};