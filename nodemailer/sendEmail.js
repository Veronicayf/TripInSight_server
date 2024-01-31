const nodemailer = require('nodemailer');
require('dotenv').config()
const { user } = require('../server/src/sync/dbConnection')

const sendEmailFunction = async (email, name) => {

    const transporter = nodemailer.createTransport({

        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
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
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
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

const purchasedEmail = async (userId, initialDate, tickets, equipment, totalPrice) => {

    const foundUser = await user.findByPk(userId);


    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    const message = {
        from: process.env.SMTP_USER,
        to: foundUser.email,
        subject: "Thank You for Booking Your Tour with Us!",
        html: `
        <html>
            <body>
                <p>Hello ${foundUser.name},</p>
                <p>It's fantastic to know that you've booked your tour with us! We wanted to take a moment to thank you for trusting us with this experience. We're thrilled to have you on board and ensure it's an incredible adventure.</p>
                <p>Below, we detail your purchase:</p>
                <ul>
                    <li>Start Date: ${initialDate}</li>
                    <li>Ticket: ${tickets}</li>
                    <li>Equipment: ${equipment}</li>
                </ul>
                <p>with a successful payment of $ ${totalPrice}.</p>
                <p>See you soon on the tour!</p>
                <p>Best Regards,</p>
                <p>Trip In Sight Team</p>
            </body>
        </html>
    `
    };

    await transporter.sendMail(message);
};

module.exports = {
    sendEmailFunction,
    subscriptionEmail,
    purchasedEmail
}
