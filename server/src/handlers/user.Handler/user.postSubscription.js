const { subscriptionController, subscriptionEmailController } = require('../../controllers/User/user.postSubscriptionController');
const { validationResult } = require('express-validator')

const subscriptionHandler = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                ok: false,
                errors: errors.mapped()
            })
        }

        const { email } = req.body;

        const existingUser = await subscriptionController(email);

        if (!existingUser) {
            return res.status(404).json({
                ok: false,
                message: 'you must log in first.'
            });
        }
        else {
            await subscriptionEmailController(email);
            return res.status(200).json({
                ok: true,
                message: 'Thanks for subscribing.'
            });
        }
    } catch (error) {
        return res.status(500).json({
            ok: false,
            error: error.message
        });
    }
}

module.exports = {
    subscriptionHandler
}