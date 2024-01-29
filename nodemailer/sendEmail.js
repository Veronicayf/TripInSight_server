const nodemailer = require('nodemailer');

const sendEmailFunction = async (email, name) => {

    const transporter = nodemailer.createTransport({

        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'tripinsight.tours@gmail.com',
            pass: 'mipzpxibnmhsiexm',
        },
    });

    const message = {
        from: process.env.SMTP_USER,
        to: email, //se toma desde el modelo user
        subject: "Welcome to the Trip in Sight Tours Family",
        text: `Hello, ${name}, \n\nWelcome to the TRIP IN SIGHT Tours family! We are thrilled to have you with us and hope you enjoy the incredible travel experiences we offer.\n\nThank you for joining us!\n\nHappy travels`
    }
    await transporter.sendMail(message);

}

const subscriptionEmail = async (email) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'tripinsight.tours@gmail.com',
            pass: 'mipzpxibnmhsiexm',
        },
    });

    const message = {
        from: process.env.SMTP_USER,
        to: email,
        subject: "Thank You for Subscribing!",
        text: "Thank you for subscribing to our newsletter! We're excited to share our latest updates and offers with you. Welcome to the Trip in Sight Tours community!"
    };

    await transporter.sendMail(message);
};

module.exports = {
    sendEmailFunction,
    subscriptionEmail
}
