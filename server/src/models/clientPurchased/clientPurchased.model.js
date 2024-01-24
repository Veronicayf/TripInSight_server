const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('purchased', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
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