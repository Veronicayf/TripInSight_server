const { purchased, user } = require("../../sync/dbConnection")


const getAllUserPurchasedsController = async(id) => {

    try {
        console.log(id);
        const foundUser = await user.findByPk(id);

        if (!foundUser) {
            throw `Any user have id: ${id}`
        }
        
        const purchaseds = await purchased.findAll({
            where: {userId: id}
        });

        if(purchaseds.length === 0) {
            throw 'The user does not have purchased tours.';
        }

        return purchaseds;

    } catch (error) {
        return {error: error};
    }

}

module.exports = {
    getAllUserPurchasedsController
}