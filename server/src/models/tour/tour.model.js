const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('tour', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        initialDate: {
            type: DataTypes.DATE,   
            allowNull: false,
        },
        endDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        coutry: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        capacity: {
            type: DataTypes.INTEGER, 
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT, //ANTES TEXT
            allowNull: false
        },
        season: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER, 
            allowNull: false
        },
        equipment: {
            type: DataTypes.TEXT, //ANTES TEXT
            allowNull: false
        },
        //Agregar rating- 1...5
    }, { timestamps: false });
}