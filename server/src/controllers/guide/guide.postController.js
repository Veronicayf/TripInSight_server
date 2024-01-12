const { guide } = require('../../sync/dbConnection')


const postGuide = async (  forename, surname, nationality, image, birthDate, biography ) =>{


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
}

module.exports={ postGuide }