const { deleteTour } = require('../../controllers/tours/tours.deleteController')

const deleteTourHandler = async (req, res) => {
    const { id } = req.params;

    try {
        await deleteTour(id, res);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = {
    deleteTourHandler,
}
