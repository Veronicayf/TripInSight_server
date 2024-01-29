const { tour } = require('../../sync/dbConnection');

const getAllTours = async (page, pageSize) => {
  const offset = (page - 1) * pageSize;

  try {
    const allTours = await tour.findAll({
      limit: Number(pageSize),
      offset: Number(offset)
    });

    if (allTours.length === 0) {
      throw new Error('no tours to show')
    }
    return allTours;
  } catch (error) {
    console.log('controller error', error)
    throw error
  }

}

module.exports = {
  getAllTours
}