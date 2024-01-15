const putUser = async (forename, surname, nationality, image, birthDate, email, password, phoneNumber) =>{

  try {
  

    throw Error ('invalid data')

  } catch (error) {

    throw error('insufficient data')

  }
      
}

module.exports={putUser}