const { getTours, getAllTours } = require('../../controllers/tours/tours.getController')

const getAllToursHandler = async (req, res) => {
    try {
        const allTours = await getAllTours();


        res.status(200).json(allTours)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getToursHandler = async (req, res) => {

    const { id } = req.params

    try {
        const tourById = await getTours(id)

        if (!tourById) {
            return res.status(404).json({ error: 'Tour not found' })
        }

        res.status(200).json(tourById)

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


module.exports = {
    getToursHandler,
    getAllToursHandler
}
