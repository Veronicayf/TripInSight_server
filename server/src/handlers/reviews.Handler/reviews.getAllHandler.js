const { getAllReviews } = require('../../controllers/reviews/reviews.getAllController')
const { validationResult } = require('express-validator');


const getAllReviewsHandler = async(req,res)=>{

    console.log('llegamos al handler')
   
    try {

        const allReviews = await getAllReviews()

        if (allReviews.length === 0) { 
            return res.status(400).json({
                errors: {
                    msg: 'there are no reviews on database'
                }
            })
        }

        console.log(allReviews)

        res.status(200).json(allReviews)
        
    } catch (error) {

        res.status(400).json({error: error})
    }

}

module.exports ={ getAllReviewsHandler }