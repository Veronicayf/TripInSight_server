const { user, tour } = require("../../sync/dbConnection");

const addFavoriteController = async(tourId, userId) => {
        

    try{
        const foundUser = await user.findByPk(userId);
        const tourFounded = await tour.findByPk(tourId);

        if(!foundUser) {
            throw  `There is no users with id: ${userId}`;
        }

        if(!tourFounded) {            
            throw  `There is no tours with id: ${tourId}`;
        }
                
        tourFounded.addUser(foundUser.id, { through: 'favorites_tours' });
        
        await tourFounded.save();
        
        return {msg: 'The tour was added to the favorites view successfully.'}
        
    }catch(error) {
        return {error: error};
    }
}

module.exports = {
    addFavoriteController
}