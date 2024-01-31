const { user, tour, purchased } = require("../../sync/dbConnection");
const { purchasedTour } = require("../tours/tours.putPurchasedController");

const purchasedPostController = async (tourId, userId, initialDate, tickets, equipment, status, detail, totalPrice) => {

    tickets = parseInt(tickets);

    try {

        const foundUser = await user.findByPk(userId);

        if (!foundUser) {
            throw `Any user have id: ${userId}`
        }

        const foundTour = await tour.findByPk(tourId);

        if (!foundTour) {
            throw `Any tour have id: ${tourId}`
        }
        
        const aux = foundTour.subscription + tickets;

        if (aux > foundTour.capacity) {
            throw {
                msg: 'No available spots'
            }
        }

        foundTour.places -= tickets;
        foundTour.subscription += tickets;
        foundTour.save();

        const newPurchased = await purchased.create({
            tourId,
            tourName: foundTour.nameTour,
            userId,
            userName: foundUser.name, //
            initialDate,
            tickets,
            equipment,
            status,
            detail,
            totalPrice
        });

        return newPurchased;

    } catch (error) {

        return { error: error };
    }


}

module.exports = {
    purchasedPostController
}