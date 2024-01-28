
const { sendEmailFunction } = require('../../../../nodemailer/sendEmail');
const { user } = require('../../sync/dbConnection');


const postUser = async (auth0Id, name, nationality, image, birthDate, email, admin, phoneNumber) => {

	try {		
		admin = !admin ? admin = false : admin = true;

		const foundUser = await user.findOne({where: {email: email}});

		if(foundUser) {
			return (foundUser);
		}

		if (name && image && email ) {

			if (auth0Id) { //Registra un usuario que venga de google.

				const [search, created] = await user.findOrCreate({
					where: { auth0Id: auth0Id },
					defaults: {
						auth0Id: auth0Id,
						name: name,
						email: email,
						image: image,
					}
				});		

				await sendEmailFunction(email);
				return search;
			}
			
			const newUser = user.create({				

				name: name,
				email: email,
				image: image,
				nationality,
				birthDate,
				phoneNumber,
				admin: admin			
			});

			await sendEmailFunction(email);
		
			return newUser;
		}

	} catch (error) {

		return {error: error};
	}

}

module.exports = { postUser }