const { getAllGuide } = require('../../controllers/guide/guide.getAllController')
const { validationResult } = require('express-validator')

const getAllGuideHandler = async (req, res) => {

    const { page, pagesize } = req.query

try {

    const guide = await getAllGuide(page, pagesize)

    if (guide.length === 0) { 
        return res.status(400).json({
            errors: {
                msg: 'there are no guides on database'
            }
        })
    }

      if (guide.errors) return res.status(400).json(guide)
       res.status(200).json(guide)
    
} catch (error) {
    res.status(400).json({error: error})
}
        
    
}


module.exports = {
    getAllGuideHandler,
}