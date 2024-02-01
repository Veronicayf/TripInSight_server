const { reviews } = require('../../sync/dbConnection')

const getAllReviews = async()=>{


    console.log('llegamos al controller ')
    const review = await reviews.findAll()
    return review

}

module.exports = { getAllReviews }