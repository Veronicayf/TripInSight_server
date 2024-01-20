const { postUser } = require('../../controllers/User/user.postController');
const { validationResult } = require('express-validator');
const nodemailer = require('nodemailer');


//* Raul. 
const postUserHandler = async (req, res) => {

    const { auth0Id, forename, surname, nationality, image, birthDate, email, phoneNumber } = req.body;

    try {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                ok: false,
                errors: errors.mapped()
            })
        }

        const newUser = await postUser(auth0Id ,forename, surname, nationality, image, birthDate, email, phoneNumber);        

        const transporter = nodemailer.createTransport({

            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'maribueno1587@gmail.com',
                pass: 'mmoxvtyvflzkvqea',
            },
        });

        const mensaje = {
            from: process.env.SMTP_USER,
            to: email, //se toma desde el modelo user
            subject: "funciona por favor!!!",
            text: "Envio de correo desde node utilizando nodemailer",
        }
        await transporter.sendMail(mensaje);

        res.status(201).json(newUser);

    } catch (error) {        
        res.status(404).json({ error: error.message });
    }
}

module.exports = {
    postUserHandler,
}
