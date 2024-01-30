const { tour } = require('../../sync/dbConnection')
const moment = require('moment');

const postTours = async (tourData) => {

  console.log(tourData.initialDate)

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

    const newTour = await tour.create(tourData);
    return newTour;

  } catch (error) {
    console.log('controller error', error);
    throw error; 
  }
}

module.exports = { postTours }



  