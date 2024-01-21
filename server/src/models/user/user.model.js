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
        name: {
            type: DataTypes.STRING,
            allowNull: false,            
        },
        nationality: {
            type: DataTypes.STRING,
            allowNull: true 
        },
        image: {
            type: DataTypes.STRING, //tipo URL buscar
            allowNull: true,
        },
        birthDate: {
            type: DataTypes.STRING, //formato fecha dd/mm/yyyy
            allowNull: true 
        },        
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        admin: {
            type: DataTypes.BOOLEAN,                                    
        },
        isBanned: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        phoneNumber: {
            type: DataTypes.STRING, 
            allowNull: true, 
        }
    }, { timestamps: false });
}