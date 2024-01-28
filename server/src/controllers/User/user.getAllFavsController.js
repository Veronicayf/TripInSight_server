const { user, tour, favorites_tours } = require("../../sync/dbConnection");

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
    
        const allFavs = await favorites_tours.findAll({
          where: { id: id },
          include: [{
            model: tour,
            attributes: ['id', 'nameTour', "initialDate", 'endDate', 'image', 'continent', 'country', 'city', 
        'type', 'capacity', 'subscription', 'places', 'description', 'season', 'status', 'price', 'equipment', 
    'tags', 'photos' ], 
          }],
        });
    
        return allFavs;
      } catch (error) {
      
        throw error;
      }
    }


module.exports = { getAllFavs }

// name
// email
