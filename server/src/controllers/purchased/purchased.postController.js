const { user, tour, purchased } = require("../../sync/dbConnection");

const purchasedPostController = async(tourId, userId, initialDate, tickets, equipment, status, detail, totalPrice) => {
    
    try {
        
        const foundUser = await user.findByPk(userId);
    
        if(!foundUser) {
            throw `Any user have id: ${userId}`
        }
    
        const foundTour = await tour.findByPk(tourId);
    
        if(!foundTour) {
            throw `Any tour have id: ${tourId}`
        }

        const newPurchased = await purchased.create({
            tourId,
            tourName: foundTour.nameTour,
            userId,
            userName: foundUser.name,
            initialDate,
            tickets,
            equipment,
            status,
            detail,
            totalPrice 
        });

        return newPurchased;

    } catch (error) {
        
        return {error: error};
    }


}

module.exports = {
    purchasedPostController
}