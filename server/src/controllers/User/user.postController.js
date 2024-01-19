
const { user } = require('../../sync/dbConnection');

const postUser = async (forename, surname, nationality, image, birthDate, email, admin, phoneNumber) => {

  try {

    if (forename && surname && image && email ) {

      const newUser = await user.create({
        forename,
        surname,
        nationality,
        image,
        birthDate,
        email,
        admin,
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