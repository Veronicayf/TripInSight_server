const { postGuide } = require('../../controllers/guide/guide.postController')
const { validationResult } = require('express-validator')

const postGuideHandler = async (req, res) => {

    const { forename, surname, nationality, image, birthDate, biography } = req.body

    try {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                of: false,
                errors: errors.mapped()
            })
        }
        
        const guide = await postGuide( forename, surname, nationality, image, birthDate, biography )
        if(!guide) throw Error (`The guide with the id : ${id} does not exist`)
        
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
    postGuideHandler,
}