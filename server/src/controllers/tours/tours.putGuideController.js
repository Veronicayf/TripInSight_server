const { guide, tour, models } = require('../../sync/dbConnection');

const putGuideController = async(tourFounded, guideFounded, guideIden) => {
          
// Ahora puedes utilizar la relación guide_tours
    try {
        // Ahora puedes utilizar la relación guide_tours
        const guideTour = await models.guide_tours.findOne({
            where: {
                tourId: tourFounded.id
            }
        });

        if (guideTour) {
            // Actualiza el campo guideId directamente con el nuevo valor
            await models.guide_tours.update(
                { guideId: guideIden },
                {
                    where: {
                        tourId: tourFounded.id
                    }
                }
            );           
        } else {            

            //? Agrega el id del guia a la tabla tour.
            tourFounded.addGuide(guideFounded);

            tourFounded.guideId = guideIden;
            await tourFounded.save();
        }

    // Resto del código...
    } catch (error) {
        console.error('Error updating guide_tours:', error);
        throw error;
    } 
    
}

module.exports = {
    putGuideController
}