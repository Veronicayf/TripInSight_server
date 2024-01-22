const nodemailer = require('nodemailer')
const { user } = require('../../sync/dbConnection');

const sendWelcomeEmail = async (email) => {

	const transporter = nodemailer.createTransport({

		host: 'smtp.gmail.com',
		port: 587,
		secure: false,
		auth: {
			user: 'tripinsight.tours@gmail.com',
			pass: 'mipzpxibnmhsiexm',
		},
	});

	const welcomeMessage = {

		from: process.env.SMTP_USER,
		to: email,
		subject: "Bienvenido!!!",
		text: "Gracias por formar parte de TRIP IN SIGHT"
	};

	await transporter.sendMail(welcomeMessage);

	await user.update({ emailSent: true }, { where: { email: email } })
};


const postUser = async (auth0Id, name, nationality, image, birthDate, email, admin, phoneNumber) => {

	try {

		if (name && image && email) {

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

				if (!search.emailSent) {
					await sendWelcomeEmail(email);
				}

				return search;
			}

			const newUser = user.create({
				name: name,
				email: email,
				image: image,
				nationality,
				birthDate,
				phoneNumber,
				admin: admin,
				emailSent: false
			});

			if (!newUser.emailSent) {
				await sendWelcomeEmail(email);
			}

			return newUser;
		}

	} catch (error) {

		throw error;
	}

}

module.exports = { postUser }