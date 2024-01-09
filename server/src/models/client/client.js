const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('client', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
        },
        forename: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        surname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nationality: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING, //tipo URL buscar
            allowNull: true,
        },
        birthDate: {
            type: DataTypes.STRING, //formato fecha dd/mm/yyyy
            allowNull: false
        },
        //A CONVERSAR
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phoneNumber: {
            type: DataTypes.NUMBER,
            allowNull: false,
        }
    }, { timestamps: false });
}