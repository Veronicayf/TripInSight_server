const { user, tour, model } = require("../../sync/dbConnection");

const deleteFavoriteController = async(tourId, userId) => {
    
    try {
        
        const foundUser = await user.findByPk(userId);
        const foundTour = await tour.findByPk(tourId);
    
        if(!foundUser) {
            throw `There is no user with id: ${userId}`;
        }
    
        if(!foundTour) {
            throw `There is no user with id: ${tourId}`;
        }

        await foundUser.removeTour(foundTour);
        
        return {msg: 'The favorite tour was removed.'};

    } catch (error) {
        return {error: error};
    }

}

module.exports = {
    deleteFavoriteController
}