const { tour } = require('../../sync/dbConnection');

const putTours = async (id, tourData) => {
  try {
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