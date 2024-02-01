const { user, models } = require("../../sync/dbConnection");

const getAllFavs = async(id)=> {

    try {
        
        const allFavsUser = await user.findByPk(id);
    
        if (!allFavsUser) return ({
            errors: {
                page: {
                    type: "query",
                    value: "id",
                    msg: `the user with the id ${id} does not exists`,
                    path: "id",
                    location: "query"
                }
            }
        })
    
        const allFavs = await models.favorites_tours.findAll({
          where: { userId: id },
        });
    
        return allFavs;
      } catch (error) {
      
        throw error;
      }
    }


module.exports = { getAllFavs }

