const { tour } = require('../../sync/dbConnection');
const moment = require('moment');

const putTours = async (id, tourData) => {
  try {
        
    const currentDate = moment().startOf('day');
    const tourInitialDate = moment(tourData.initialDate).startOf('day');
    const tourFinalDate = moment(tourData.endDate).startOf('day')

    if (tourInitialDate.isBefore(currentDate)) {
      throw new Error('The Tour initial date could not be a past date');
    }

    if (tourFinalDate.isBefore(currentDate)) {
      throw new Error('The Tour end date could not be a past date');
    }

    const existingTour = await tour.findByPk(id);

    if (!existingTour) {
      return { success: false, message: 'Tour not found' };
    }

    await existingTour.update(tourData);
    return existingTour

  } catch (error) {
    console.error('Error updating tour:', error);
    throw error;
  }
};

module.exports = { putTours };