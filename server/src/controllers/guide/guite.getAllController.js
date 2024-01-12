const { guide } = require('../../sync/dbConnection')


const getAllGuide = async ( id ) =>{

    return await guide.findAll()
} 

module.exports={ getAllGuide }