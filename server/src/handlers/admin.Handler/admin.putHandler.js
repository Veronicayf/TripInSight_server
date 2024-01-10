const { putAdmin } = require('../../controllers/admin/admin.putController')

const putAdminHandler = async (req, res) => {

    const { name, lastname, email, birthdate, nationality, phone } = req.body

    try {
        const user = await putAdmin( name, lastname, email, birthdate, nationality, phone )

        res.status(200).json(user)
        
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}


module.exports = {
    putAdminHandler,
}
