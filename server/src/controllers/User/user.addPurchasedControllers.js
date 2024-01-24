const { user, tour } = require("../../sync/dbConnection");

const addPurchasedController = async(tourId, userId) => {
    
    // try {
        
    //     const foundUser = await user.findByPk(userId);
    //     const tourFounded = await tour.findByPk(tourId);

    //     if(!foundUser) {
    //         throw  `There is no users with id: ${userId}`;
    //     }

    //     if(!tourFounded) {            
    //         throw  `There is no tours with id: ${tourId}`;
    //     }
        
    //     // tourFounded.addUser(foundUser.id );
    //     await foundUser.addTour(tourFounded.id, { through: 'purchased_tours' });
        
    //     return {msg: 'The tour was added to the purchased view successfully.'}

    // } catch (error) {
    //     return {error: error};
    // }

    try {
        const foundUser = await user.findByPk(userId);
        const tourFounded = await tour.findByPk(tourId);

        if (!foundUser) {
            throw `There is no user with id: ${userId}`;
        }

        if (!tourFounded) {
            throw `There is no tour with id: ${tourId}`;
        }        
        // Agregar la asociación a la tabla intermedia 'purchased_tours'
        tourFounded.addUser(foundUser.id, { through: 'purchased_tours' });
        await tourFounded.save();

        return { msg: 'The tour was added to the purchased view successfully.' };
    } catch (error) {
        return { error: error };
    }
}

module.exports = {
    addPurchasedController
}