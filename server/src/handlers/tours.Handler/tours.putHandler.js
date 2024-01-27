const { putTours } = require('../../controllers/tours/tours.putController');

const putToursHandler = async (req, res) => {
    const { id } = req.params;
    const tourData = req.body;

    try {
        const updateTour = await putTours(id, tourData);
        res.status(200).json(updateTour)


    } catch (error) {
        console.error('Error updating tour:', error);

        if (error.message === 'Tour not found') {
            return res.status(404).json({ message: 'internal sever error' })
        }
    }
};

module.exports = { putToursHandler };
