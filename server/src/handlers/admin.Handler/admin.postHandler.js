const { postAdmin } = require('../../controllers/admin/admin.postController')

const postAdminHandler = async (req, res) => {

    const { name, lastname, email, birthdate, nationality, phone } = req.body

    try {
        const user = await postAdmin( name, lastname, email, birthdate, nationality, phone )

        res.status(200).json(user)
        
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}


module.exports = {
    postAdminHandler,
}
