const { tour } = require('../../sync/dbConnection')

const getTours = async (id) => {

    try {
        const tourById = await tour.findByPk(id);
        return tourById;
    } catch (error) {
        console.log('controller error', error);
    }


}

module.exports = {
    getTours
}