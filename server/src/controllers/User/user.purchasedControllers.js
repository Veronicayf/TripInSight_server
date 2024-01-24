const { purchased, user } = require("../../sync/dbConnection")



const addPurchaseController = async(idUser, status, detail, totalPrice) => {
        
   const usuario = user.create();

}

module.exports = {
    addPurchaseController
}