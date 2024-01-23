const nodemailer = require('nodemailer');

const sendEmailFunction = async(email) => {
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
    
}

module.exports = {
    sendEmailFunction
}
