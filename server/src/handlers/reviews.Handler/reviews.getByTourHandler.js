const { getTourReviews } = require('../../controllers/reviews/reviews.getByTourController')
const { validationResult } = require('express-validator');


const getTourReviewsHandler = async(req,res)=>{

    const { id } = req.params
      
    const errors = validationResult(req);

    if( !errors.isEmpty() ) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }
   
    try {
        const tourReview = await getTourReviews( id );        
        if(!tourReview) throw Error (`Does not exists comments related to the tour with the id ${id}`);

        return res.status(200).json(tourReview);
        
    } catch (error) {
        return res.status(404).json({
            ok: false,
            errors: {
                id: {
                    type: "field",
                    value: id,
                    msg: error.message,
                    path: "id",
                    location: "params"
                }
            },
        })
    }
}

module.exports ={ getTourReviewsHandler }