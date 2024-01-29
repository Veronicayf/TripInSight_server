const { addPurchaseController } = require("../../controllers/User/user.purchasedControllers")


const addPurchasedHandler = async(req, res) => {

    const {idUser, status, detail, totalPrice} = req.body;

    try {
        
        const response = await addPurchaseController(idUser, status, detail, totalPrice)
    
        return res.json(response);
        
    } catch (error) {
        return res.status(400).json(error);
    }

}

module.exports = {
    addPurchasedHandler
}