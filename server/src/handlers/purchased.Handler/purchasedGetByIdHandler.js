const { purchasedGetByIdController } = require("../../controllers/purchased/purchased.getByIdController");


const getPurchasedByIdHandler = async(req, res) => {

    const {id} = req.params;    

    try {
        
        const response = await purchasedGetByIdController(id);

        if(response.error) throw response;

        return res.json(response);

    } catch (error) {
        return res.status(400).json(error);
    }

}

module.exports = {
    getPurchasedByIdHandler
}