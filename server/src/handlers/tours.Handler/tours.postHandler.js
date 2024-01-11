const { postTours } = require('../../controllers/tours/tours.postController');

const postToursHandler = async (req, res) => {
    const tourData = req.body;

    try {
        const requiredFields = ['nameTour', 'initialDate', 'endDate', 'image', 'country', 'city', 'type', 'capacity', 'description', 'season', 'status', 'price', 'equipment'];
        const missingData = requiredFields.filter(field => !(field in tourData));

        if (missingData.length > 0) {
            return res.status(400).json({ error: `missing required fields: ${missingData.join(', ')}` });
        }

        const newTour = await postTours(tourData);
        res.status(200).json(newTour);
    } catch (error) {
        res.status(500).json({ error: 'llega hasta aqui', message: error.message });
    }
}

module.exports = {
    postToursHandler,
};
