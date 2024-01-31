const { tour } = require("../../sync/dbConnection")


const toursPutStatusController = async(status, idTour) => {

    try {

        const foundTour = await tour.findByPk(idTour);

        if(!foundTour) {            
            throw `The tour with id: ${idTour} does not exists`;
        }

        foundTour.status = status;
        foundTour.save();

        return foundTour;

    } catch (error) {
        
        return {error: error};

    }

}

module.exports = {
    toursPutStatusController
}