const { guide } = require('../../sync/dbConnection')


const getGuide = async ( id ) =>{

 
    const returnedGuide = await guide.findByPk(id)  
    
    return returnedGuide  
}

module.exports={ getGuide }