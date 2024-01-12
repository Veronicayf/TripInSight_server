const { guide } = require('../../sync/dbConnection')


const postGuide = async (  forename, surname, nationality, image, birthDate, biography ) =>{

try {

    if ( forename, surname, nationality, image, birthDate, biography ) {
      const newGuide = await guide.create({
            forename,
            surname,
            nationality,
            image,
            birthDate,
            biography
            })

         return newGuide   
      }
      throw Error ('invalid data')

  } catch (error) {

    throw error('insufficient data')
    
  }
  
}

module.exports={ postGuide }