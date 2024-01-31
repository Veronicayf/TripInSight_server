const { getAllPurchasedController } = require("../../controllers/purchased/purchased.getAllController")


const getAllPurchasedHandler = async(req, res) => {

    const { page, pagesize } = req.query;
    
    try {
        
        const response = await getAllPurchasedController(page, pagesize);

        if(response.length === 0) {
            throw {errors: {msg: 'there are no purchaseds on database'}}
        }

        return res.json(response);

    } catch (error) {
        return res.status(400).json(error);
    }

}

module.exports = {
    getAllPurchasedHandler
}