const { subscriptionController } = require('../../controllers/subscriptions/subscription.post.controller');

const subscriptionHandler = async (req, res) => {

    try {
        await subscriptionController(req, res);
    } catch (error) {
        console.error('Error en el handler de subscription', error)
        res.status(500).json({ success: false, message: 'Hubo un error al enviar el email' })
    }
}

module.exports = {
    subscriptionHandler
}