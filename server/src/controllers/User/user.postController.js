const { user } = require('../../sync/dbConnection')


const postUser = async (  name, lastname, email, birthdate, nationality, phone ) =>{

try {

    if (name && lastname && email && birthdate && nationality, phone) {
      user.create()
      }
      throw Error ('invalid data')

  } catch (error) {

    throw error('insufficient data')
    
  }
  
}

module.exports={postUser}