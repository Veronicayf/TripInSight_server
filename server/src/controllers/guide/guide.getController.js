const { guide } = require('../../sync/dbConnection')


const getGuide = async ( id ) =>{

 
    const returnedGuide = await guide.findByPk(id)  
    
    return returnedGuide  
}

const getAllGuides = async (req, res) => {

    try {
      const allGuides = await guide.findAll();
      return allGuides;
    } catch (error) {
      console.log('controller error', error)
    }
  
  }

module.exports={ getGuide, getAllGuides }