const moment = require('moment');
const { tour,  Op } = require('../../sync/dbConnection');

const getAllTours = async (page, pageSize) => {
  const offset = (page - 1) * pageSize;

  try {
    
    const currentDate = moment().startOf('day');

    const allTours = await tour.findAll({
      where: {
        initialDate: {
          [Op.gte]: currentDate.toDate(), 
        },
      },
      limit: Number(pageSize),
      offset: Number(offset),
    });

    if (allTours.length === 0) {
      throw new Error('No hay tours para mostrar');
    }

    return allTours;
  } catch (error) {
    console.log('controller error', error);
    throw error;
  }
};

module.exports = {
  getAllTours,
};