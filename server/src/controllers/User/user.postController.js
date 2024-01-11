
const { user } = require('../../sync/dbConnection');

const postUser = async (  name, lastname, email, birthdate, nationality, phone ) =>{

  try {
    
    if (name && lastname && email && birthdate && nationality && phone) {
            
      const newUser = await user.create({
        forename: name,
        surname: lastname,
        nationality,
        birthDate: birthdate,
        email,
        password: '12345',
        phoneNumber: phone,
      });

      console.log(newUser.dataValues);
      return newUser.dataValues;  
    }
       
    return newUser;

  } catch (error) {

    console.log(error, 'linea 27');
    return error;       
  }
  
}

module.exports = { postUser }