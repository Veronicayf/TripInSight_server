const { getGuide, getAllGuides } = require('../../controllers/guide/guide.getController')
const { validationResult } = require('express-validator')

const getGuideHandler = async (req, res) => {

    const { id } = req.params

    try {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                of: false,
                errors: errors.mapped()
            })
        }

        const guide = await getGuide( id )
        if(!id) throw Error (`The guide with the id : ${idPais} does not exist`)

        res.status(200).json(guide)
        
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

const getAllGuidesHandler = async (req, res) => {
    try {
        const allGuides = await getAllGuides();
        res.status(200).json(allGuides)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getGuideHandler,
    getAllGuidesHandler
}