const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('user', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
        },
        auth0Id: {
            type: DataTypes.STRING,
            allowNull: true,            
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
            allowNull: true //! modificado para funcionar con auth.
        },
        image: {
            type: DataTypes.STRING, //tipo URL buscar
            allowNull: true,
        },
        birthDate: {
            type: DataTypes.STRING, //formato fecha dd/mm/yyyy
            allowNull: true //! modificado para funcionar con auth.
        },
        //A CONVERSAR
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        admin: {
            type: DataTypes.BOOLEAN, 
            defaultValue: false, //! modificado para funcionar con auth.            
        },
        isBanned: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        phoneNumber: {
            type: DataTypes.STRING, //! Cambiado a string.
            allowNull: true, //! modificado para funcionar con auth.
        }
    }, { timestamps: false });
}