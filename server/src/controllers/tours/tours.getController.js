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
// const getTours = async (id) => {

//   try {
//     const tourById = await tour.findByPk(id);
//     return tourById;
//   } catch (error) {
//     console.log('controller error', error);
//   }


// }


module.exports = {
  // getTours,
  getAllTours
}