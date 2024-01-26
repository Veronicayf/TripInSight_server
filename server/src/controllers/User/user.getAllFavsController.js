const { user, tour, favorites_tours } = require("../../sync/dbConnection");

const getAllFavs = async(id)=> {

    const allFavs = await favorites_tours.findByPk(id);

    return 
}

module.exports = { getAllFavs }

// name
// email
