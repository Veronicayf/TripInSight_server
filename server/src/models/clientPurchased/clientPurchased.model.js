const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('purchased', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
        },
        status: { //COMPRA APROBADA O NO
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        detail: {
            type: DataTypes.JSON,
            allowNull: false

        },
        totalPrice: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

    }, { timestamps: false })
}
//QUE NOS DEVUELVE PAYPAL - PARA VER COMO SE ENCARA.

//SOLO DEVUELVE EL NOMBRE Y CUANTO PAGASTE. (SI FUE APROBADA O NO )

// SE TENDRIAN QUE TOMAR LOS DATOS DEL
// CARRITO DE COMPRAS DESDE EL FRONT -> VIEWS - CARD - BUY SECTION(SE ENVIE EL DETAIL)
//SE PIENSA COLOCAR UNA PROPIEDAD AUTOMATICA DE FECHA, PARA EL BOTON DE COMPRA.
//