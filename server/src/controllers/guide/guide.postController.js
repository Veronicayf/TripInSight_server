const { guide } = require('../../sync/dbConnection')


const postGuide = async (  forename, surname, nationality, image, birthdate,  biography ) =>{

try {

    if ( forename, surname, nationality, image, birthdate, biography ) {
      const newGuide = await guide.create({
            forename,
            surname,
            nationality,
            image,
            birthdate,
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