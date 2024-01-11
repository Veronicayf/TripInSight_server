const { postTours } = require('../../controllers/tours/tours.postController')

const postToursHandler = async (req, res) => {

    const { name, lastname, email, birthdate, nationality, phone } = req.body

    try {
        const user = await postTours( name, lastname, email, birthdate, nationality, phone )

        res.status(200).json(user)
        
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}


module.exports = {
    postToursHandler,
}
