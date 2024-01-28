const { user,tour } = require('../../sync/dbConnection')

const reviewTour = async(idUser, idTour, review)=> {

    try {
       
        const user = await user.findByPk(idUser);   

        if (!user) return ({
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

        const tour = await tour.findByPk(idTour);   

        if (!tour) return ({
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
          
        const newReview = review.create({

            //falta saber si los comentarios van en un modelo nuevo o actualizan alguno anterior
            // en caso de actualizar uno, habria que modificar la ruta y que sea un put en lugar de 
            //un post 

        })

        return newReview

    } catch (error) {
        throw error
    }
}

module.exports = { reviewTour }