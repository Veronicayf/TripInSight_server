
const { user } = require('../../sync/dbConnection');

const postUser = async (  forename, surname, nationality, image, birthDate, email, password, phoneNumber  ) =>{

  try {
    
    if (forename && surname && nationality && image && birthDate && email && password && phoneNumber) {
            
      const newUser = await user.create({
        forename,
        surname,
        nationality,
        image,
        birthDate,
        email,
        password,
        phoneNumber,
      });
      
      return newUser;  
    }
       
    return newUser;

  } catch (error) {
    
    throw error;      
  }
  
}       

module.exports = { postUser }