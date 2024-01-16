const { getAllTours } = require('../../controllers/tours/tours.getController')

const getAllToursHandler = async (req, res) => {
    try {
        const allTours = await getAllTours();


        res.status(200).json(allTours)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


module.exports = {
    getAllToursHandler
}
