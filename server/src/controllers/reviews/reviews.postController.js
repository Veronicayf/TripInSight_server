const { user,tour, reviews, purchased } = require('../../sync/dbConnection')

const reviewTour = async(idUser, idTour, review)=> {

    try {
       
        const findUser = await user.findByPk(idUser);   

        if (!findUser) return ({
            errors: {
                page: {
                    type: "body",
                    value: "id",
                    msg: `the user with the id ${idUser} does not exists`,
                    path: "id",
                    location: "body"
                }
            }
        })

        const findTour = await tour.findByPk(idTour);   

        if (!findTour) return ({
            errors: {
                page: {
                    type: "body",
                    value: "id",
                    msg: `the user with the id ${idTour} does not exists`,
                    path: "id",
                    location: "body"
                }
            }
        })
          
        const userTour = await purchased.findOne(
            {where:{ 
                userId:idUser,
                tourId:idTour
            }
            })

        if (!userTour )return ({
            errors: {
                page: {
                    type: "body",
                    value: "id",
                    msg: `the user with the id ${idUser} has not purchased the tour with the id ${idTour}` ,
                    path: "id",
                    location: "body"
                }
            }
        })
        

        const newReview = reviews.create({
            tourId: idTour,
            userId: idUser,
            review: review
        })

        return newReview

    } catch (error) {
        throw error
    }
}


module.exports={  reviewTour } 