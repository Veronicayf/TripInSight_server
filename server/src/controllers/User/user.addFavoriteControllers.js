const { user, tour } = require("../../sync/dbConnection");

const addFavoriteController = async(tourId, userId) => {
    

    try{

        const foundUser = await user.findByPk(userId);
        const foundTour = await tour.findByPk(tourId);

        if(!foundUser) {
            throw `There is no user with id: ${userId}`;
        }

        if(!foundTour) {
            throw `There is no user with id: ${tourId}`;
        }
        
        const favoritesTours = JSON.parse(foundUser.favorites_tours);
         
        console.log(favoritesTours);

        if(favoritesTours.findIndex(favorite => favorite.tourId === tourId) >= 0 ) {
            throw `The tour with id: ${tourId} exists on favorite list`;
        }

        const newFavorite = {tourId: tourId};
    
        favoritesTours.push(newFavorite);
        
        foundUser.favorites_tours = JSON.stringify(favoritesTours);
        await foundUser.save();
        
        return foundUser;
    }catch(error) {
        
        return {error: error}

    }
}

module.exports = {
    addFavoriteController
}