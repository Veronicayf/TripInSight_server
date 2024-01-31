const { deleteGuide } = require('../../controllers/guide/guide.deleteController')
const { validationResult } = require('express-validator')

const deleteGuideHandler = async (req, res) => {

    const { id } = req.params
    
    const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                of: false,
                errors: errors.mapped()
            })
        } 

    try {
        const deletedGuide = await deleteGuide(id)
        if(!deletedGuide) throw Error (`The user with the id : ${id} does not exist`)

        res.status(200).json(deletedGuide)
        
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
    deleteGuideHandler,
}