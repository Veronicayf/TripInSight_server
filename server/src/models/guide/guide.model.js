const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('guide', {        
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
            type: DataTypes.STRING,
            allowNull: true,
        },
        birthDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        biography: {
            type: DataTypes.TEXT,
            allowNull: false
        },
    }, { timestamps: false });
}