const nodemailer = require('nodemailer');

const sendEmailFunction = async (email) => {
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
        to: email, //se toma desde el modelo user
        subject: "Gracias por formar parte de Trip in Sight",
        text: "Bienvenid@s a la familia Trip in Sight",
    }
    await transporter.sendMail(mensaje);

}

module.exports = {
    sendEmailFunction
}
