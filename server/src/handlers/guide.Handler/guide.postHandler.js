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
        
        res.status(200).json(guide)
        
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}


module.exports = {
    postGuideHandler,
}