
const { user } = require('../../sync/dbConnection');

const postUser = async (auth0Id ,forename, surname, nationality, image, birthDate, email, admin, phoneNumber) => {

	console.log(auth0Id);

	try {

		if (forename && surname && image && email ) {

			if(auth0Id) {
				
				const [search, created] = await user.findOrCreate({
					where: {auth0Id: auth0Id},
					defaults: {
						auth0Id: auth0Id,
						forename: forename,
						surname: surname,
						email: email,
						image: image,					
					}
				});
				
				return search;
			}

			const newUser = user.create({				
				forename: forename,
				surname: surname,
				email: email,
				image: image,
				nationality,
				birthDate,
				phoneNumber,
				admin
			});

			return newUser;
		}

	} catch (error) {

		throw error;
	}

}

module.exports = { postUser }