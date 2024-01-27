const { guide } = require('../../sync/dbConnection')


const getAllGuide = async () =>{

     const allGuides = await guide.findAll()
     return allGuides
} 

module.exports={ getAllGuide }