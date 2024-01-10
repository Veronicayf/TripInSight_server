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
            type: DataTypes.STRING, //buscar para url
            allowNull: true,
        },
        country: {
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
            type: DataTypes.NUMBER,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
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
        price: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        equipment: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        guide: {
            //como se podria agregar si es una clave forania
            //es una tabla intermedia
        }
    }, { timestamps: false });
}