require('dotenv').config();
const nodemailer = require('nodemailer');

const enviarEmail = async () => {

    const configuracion = {

        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'tripinsight.tours@gmail.com',
            pass: 'mipzpxibnmhsiexm',
        },
    }
    const mensaje = {
        from: "tripinsight.tours@gmail.com",
        to: "veronica.araque16@gmail.com", //se toma desde el modelo user
        subject: "correo de prueba 3",
        text: "Envio de correo desde node utilizando nodemailer",
    }

    const transporter = nodemailer.createTransport(configuracion)
    await transporter.sendMail(mensaje)
}

enviarEmail();

