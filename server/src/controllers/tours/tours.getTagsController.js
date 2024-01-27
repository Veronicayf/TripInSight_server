const { tour } = require('../../sync/dbConnection');
const { Op } = require('sequelize');

const tagsController = async (tags) => {
    if (tags) {
        const tours = await tour.findAll({
            where: {
                tags: {
                    [Op.like]: `%${tags}%`
                }
            }
        })
        return tours
    }
    throw Error('tags not found')
};

module.exports = {
    tagsController,
};