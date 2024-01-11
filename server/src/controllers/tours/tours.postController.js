const { tour } = require('../../sync/dbConnection')

const postTours = async (tourData) => {

  try {
    const newTour = await tour.create(tourData);
    return newTour;

  } catch (error) {
    throw new Error(`Error creating tour: ${error.message}`)
  }
}

module.exports = { postTours }