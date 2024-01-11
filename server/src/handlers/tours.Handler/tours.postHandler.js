const { postTours } = require('../../controllers/tours/tours.postController')

const postToursHandler = async (req, res) => {

    const tourData = req.body;

    try {
        const reqData = { id, nameTour, initialDate, endDate, image, country, city, type, capacity, description, season, price, equipment };
        const missingData = reqData.filter(search => !(search in tourData));

        if (missingData.length > 0) {
            return res.status(400).json({ error: `missing required fields: ${missingData.join(', ')}` });
        }

        const newTour = await postTours(tourData);
        res.status(200).json(newTour)

    } catch (error) {
        res.status(500).json('llega hasta aqui', error)
    }
}


module.exports = {
    postToursHandler,
}
