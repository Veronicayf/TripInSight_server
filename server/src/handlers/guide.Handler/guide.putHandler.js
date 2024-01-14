const { putGuide } = require('../../controllers/guide/guide.putController')

const putGuideHandler = async (req, res) => {

    const { id } = req.params

    try {
        const user = await putGuide( id )
        if(!id) throw Error (`The user with the id : ${id} does not exist`)

        res.status(200).json(user)
        
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}


module.exports = {
    putGuideHandler,
}