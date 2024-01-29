const { reviews } = require('../../sync/dbConnection')

const getUserReviews = async(id)=>{


    try {

        const foundReview = await reviews.findAll({
            where: {
                userId:id
            }
        }

            );      
        if(!foundReview) throw `Does not exists comments related to the user with the id ${id}`
        
          
        return foundReview;    

        
    } catch (error) {
        return {error: error};
    }
    
}

module.exports={getUserReviews}