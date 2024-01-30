const { tour } = require('../../sync/dbConnection')

const postTours = async (tourData) => {

  try {
    tourData.places = tourData.capacity;
    const newTour = await tour.create(tourData);
    return newTour;

  } catch (error) {

    console.log('controller error', error)
  }
}

module.exports = { postTours }