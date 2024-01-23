const { user, tour } = require("../../sync/dbConnection");

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

        const favoritesTours = JSON.parse(foundUser.favorites_tours);    
                        
        newListTours = favoritesTours.filter(tour => tour.tourId !== tourId);        
        
        foundUser.favorites_tours = JSON.stringify(newListTours);
        await foundUser.save();
        
        return foundUser;

    } catch (error) {
        return {error: error};
    }




}

module.exports = {
    deleteFavoriteController
}