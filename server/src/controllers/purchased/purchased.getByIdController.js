const { purchased } = require("../../sync/dbConnection");

const purchasedGetByIdController = async(purchasedId) => {

    console.log(purchasedId);

    try {
        
        const foundpurchased = await purchased.findByPk(purchasedId);
    
        if(!foundpurchased) {
            throw `Any purchased have id: ${purchasedId}`
        }

        return foundpurchased;

    } catch (error) {
        return {error: error};
    }

}

module.exports = {
    purchasedGetByIdController
}