const { postGuide } = require('../../controllers/guide/guide.postController')

const postGuideHandler = async (req, res) => {

    const { forename, surname, nationality, image, birthdate, biography } = req.body

    try {
        const guide = await postGuide( forename, surname, nationality, image, birthdate, biography )
        
        res.status(200).json(user)
        
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}


module.exports = {
    postGuideHandler,
}