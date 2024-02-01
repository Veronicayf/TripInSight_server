const { getUserReviews } = require('../../controllers/reviews/reviews.getByUserController')
const { validationResult } = require('express-validator');


const getUserReviewsHandler = async(req,res)=>{

    const { id } = req.params

      
    const errors = validationResult(req);

    if( !errors.isEmpty() ) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }
   
    try {
        const userReview = await getUserReviews( id );        
        if(!userReview) throw Error (`Does not exists comments related to the user with the id ${id}`);
        
        return res.status(200).json(userReview);
        
        
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


module.exports ={ getUserReviewsHandler }