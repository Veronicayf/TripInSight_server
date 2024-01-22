const fs = require('fs');
const nodemailer = require('nodemailer')
const { user } = require('../../sync/dbConnection');

const estadoEnvioPath = 'estadoEnvio.json';

const enviarEmail = async (destinatario) => {
	let estadoEnvio = {};
	try {
		estadoEnvio = JSON.parse(fs.readFileSync(estadoEnvioPath, 'utf8'));
	} catch (error) {
		console.error('error al leer el estado del archivo', error.message);
	}

	if (estadoEnvio[destinatario]) {
		console.log(`el correo fue enviado a: ${destinatario}`);
		return;
	}

	const configuracion = {
		host: "smtp.gmail.com",
		port: 587,
		auth: {
			user: "maribueno1587@gmail.com",
			pass: "mmoxvtyvflzkvqea",
		},
	}

	const mensaje = {
		from: "maribueno1587@gmail.com",
		to: destinatario,
		subject: "correo de prueba",
		text: "Envio de correo desde node utilizando nodemailer",
	}

	const transporter = nodemailer.createTransport(configuracion);

	try {
		// Enviar el correo
		const info = await transporter.sendMail(mensaje);
		console.log(`Correo enviado a ${destinatario}`);

		// Marcar el correo como enviado en el estado
		estadoEnvio[destinatario] = true;

		// Guardar el estado actualizado en el archivo JSON
		fs.writeFileSync(estadoEnvioPath, JSON.stringify(estadoEnvio, null, 2));
	} catch (error) {
		console.error('Error al enviar el correo:', error.message);
	}
}

const postUser = async (auth0Id, name, nationality, image, birthDate, email, admin, phoneNumber) => {
	try {
		if (name && image && email) {
			if (auth0Id) { // Registra un usuario que venga de google.
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
					await enviarEmail(email);
					await search.update({ emailSent: true });
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
				emailSent: true,
			});
			return newUser;
		}
	} catch (error) {
		throw error;
	}
}

module.exports = { postUser };