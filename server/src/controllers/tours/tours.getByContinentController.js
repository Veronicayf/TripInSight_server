const { Sequelize } = require('sequelize')
const Op = Sequelize.OP
const { tour } = require('../../sync/dbConnection')

const getContinentController = async (continent) => {
    try {
        const toursByContinent = await tour.findAll({
            where: { continent: continent },
        });

        if (toursByContinent.length === 0) {
            throw Error(`No tours found for continent: ${continent}`);
        }

        return toursByContinent;
    } catch (error) {
        console.log('getTourByContinent controller error', error);
        throw error;
    }
}

module.exports = {
    getContinentController
}