const { subscriptionEmail } = require('../../../../nodemailer/sendEmail')
const { user } = require('../../sync/dbConnection');

const subscriptionEmailController = async (email) => {
    try {
        await subscriptionEmail(email, 'No estás suscrito');
    } catch (error) {
        throw error;
    }
}

const subscriptionController = async (email) => {
    try {
        const existingUser = await user.findOne({ where: { email } });
        return existingUser;
    } catch (error) {
        throw error;
    }


}

module.exports = {
    subscriptionController,
    subscriptionEmailController
}

