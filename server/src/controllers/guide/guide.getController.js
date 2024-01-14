const { guide } = require('../../sync/dbConnection')


const getGuide = async ( id ) =>{

 try {

    const returnedGuide = await guide.findOne({
        where: {id: id}
    })  
    if (!returnedGuide) throw Error ('invalid data')
    return returnedGuide  
} 
   catch (error) {
    throw error('insufficient data')
    }
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