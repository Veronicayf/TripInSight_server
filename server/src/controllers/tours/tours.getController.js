const { tour } = require('../../sync/dbConnection'
)
const getAllTours = async (req, res) => {

  try {
    const allTours = await tour.findAll();

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