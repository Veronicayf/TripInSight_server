const { putUser } = require('../../controllers/User/putUser')

const putUserHandler = async (req, res) => {

    const { name, lastname, email, birthdate, nationality, phone } = req.body

    try {
        const user = await putUser( name, lastname, email, birthdate, nationality, phone )

        res.status(200).json(user)
        
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}


module.exports = {
    putUserHandler,
}
