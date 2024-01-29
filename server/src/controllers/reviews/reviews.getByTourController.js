const { reviews } = require('../../sync/dbConnection')

const getTourReviews = async(id)=>{

    try {

        const foundReview = await reviews.findAll({
            where:{
                tourId: id
            }
        });      
        if(!foundReview) throw `Does not exists comments related to the tour with the id ${id}`
        
          
        return foundReview;    

        
    } catch (error) {
        return {error: error};
    }
    
}
module.exports ={ getTourReviews }