const { deleteFavoriteController } = require("../../controllers/User/user.deleteFavoriteController");


const deleteFavoriteHandler = async(req, res) => {

    const {tourId, userId} = req.body;
    
    try {
        
        const response = await deleteFavoriteController(tourId, userId);

        res.json(response);

    } catch (error) {
        res.status(400).json(error);
    }

}

module.exports = {
    deleteFavoriteHandler
}