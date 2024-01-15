const { getAdmin } = require('../../controllers/admin/admin.getController')

const getAdminHandler = async (req, res) => {

    const { id } = req.params

    try {
        const user = await getAdmin( id )
        if(!id) throw Error (`The user with the id : ${idPais} does not exist`)

        res.status(200).json(user)
        
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}


module.exports = {
    getAdminHandler,
}
