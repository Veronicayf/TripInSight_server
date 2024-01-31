
const { getAllTours } = require('../../controllers/tours/tours.getController')

const getAllToursHandler = async (req, res) => {
    const { page = 1, pageSize = 1000 } = req.query
    try {
        const allTours = await getAllTours(page, pageSize);
        res.status(200).json(allTours)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


module.exports = {
    getAllToursHandler
}
