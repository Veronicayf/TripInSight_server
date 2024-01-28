const { reviewTour } = require('../../controllers/User/user.reviewTourController')
const { validationResult } = require('express-validator');


const reviewTourHandler = async(req,res) => {

    const { idUser, idTour, review } = req.body

     try {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                ok: false,
                errors: errors.mapped()
            })
        }

        const newReview = await reviewTour(idUser,idTour, review)

        return res.status(201).json(newReview);
        
     } catch (error) {
        res.status(404).json({ error: error.message });
     }


}

module.exports = { reviewTourHandler }