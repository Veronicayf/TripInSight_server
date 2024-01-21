const { postUser } = require('../../controllers/User/user.postController');
const { getUserByEmail } = require('../../controllers/User/user.getByEmailController')
const { validationResult } = require('express-validator');
const nodemailer = require('nodemailer');


//* Raul. 
const postUserHandler = async (req, res) => {

    const { auth0Id, name, nationality, image, birthDate, email, phoneNumber, admin } = req.body;

    try {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                ok: false,
                errors: errors.mapped()
            })
        }

        const existingUser = await getUserByEmail(email);

        if (existingUser || existingUser.emailSent) {
            return res.status(400).json({
                ok: false,
                error: "Correo ya fue enviado"
            });
        }

        const newUser = await postUser(auth0Id, name, nationality, image, birthDate, email, admin, phoneNumber);

        const transporter = nodemailer.createTransport({

            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'tripinsight.tours@gmail.com',
                pass: 'mipzpxibnmhsiexm',
            },
        });

        const mensaje = {
            from: process.env.SMTP_USER,
            to: email,
            subject: "Bienvenido!!!",
            text: "Gracias por formar parte de TRIP IN SIGHT",
        }
        await transporter.sendMail(mensaje);

        if (!existingUser) {
            newUser.emailSent = true;
            await newUser.save();
        }

        res.status(200).json(newUser);

    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

module.exports = {
    postUserHandler,
}
