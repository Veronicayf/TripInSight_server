const { subscriptionEmail } = require('../../../../nodemailer/sendEmail')
const { user } = require('../../sync/dbConnection');

const subscriptionController = async (req, res) => {


    try {
        const { email } = req.body;

        if (!email) {
            return ({
                error: {
                    email: {
                        type: "field",
                        value: email,
                        msg: `coloque un email valido`,
                        path: "email",
                        location: "body"
                    }
                }
            })
        }
        await subscriptionEmail(email)

        res.status(200).json({ success: true, message: 'enviado con exito' })

    } catch (error) {
        console.error('error al manejar la suscription', error)
        res.status(500).json({ success: false, message: 'Hubo un error al enviar el email' })
    }
}

module.exports = {
    subscriptionController
}
