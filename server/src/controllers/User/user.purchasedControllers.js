const { purchased, user } = require("../../sync/dbConnection")



const addPurchaseController = async(idUser, status, detail, totalPrice) => {
            
    const usuario = await user.findByPk(idUser);

    const compra = await purchased.create({status, detail, totalPrice});

    usuario.comprados = compra.id; 
    usuario.save();

    console.log(usuario);

    return usuario;
}

module.exports = {
    addPurchaseController
}