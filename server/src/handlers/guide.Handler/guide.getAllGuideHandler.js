const { getAllGuide } = require('../../controllers/guide/guite.getAllController')
const { validationResult } = require('express-validator')

const getAllGuideHandler = async (req, res) => {

    try {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(404).json({
                of: false,
                errors: errors.mapped()
            })
        }

        const guide = await getAllGuide()
        if(!guide) throw Error ("There are no guides to show registered")

        res.status(200).json(guide)
        
    } catch (error) {
        res.status(404).json({
            ok: false,
            errors: {
                id: {
                     type: "field",
                     value: id,
                     msg: error.message,
                     path: "id",
                     location: "params"
                    }
                }
            })
        }
}


module.exports = {
    getAllGuideHandler,
}