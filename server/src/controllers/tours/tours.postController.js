const { tour } = require('../../sync/dbConnection')

const postTours = async (tourData) => {

  try {
    const newTour = await tour.create(tourData);
    return newTour;

  } catch (error) {

    console.log('controller error', error)
  }
}

module.exports = { postTours }