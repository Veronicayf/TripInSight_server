const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('tour', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
        },
        nameTour: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        initialDate: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        endDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        continent: {
            type: DataTypes.STRING,
            allowNull: true
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
            type: DataTypes.INTEGER,
            allowNull: false
        },
        subscription: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0
        },
        places: {
            type: DataTypes.INTEGER,
            allowNull: true,
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
            type: DataTypes.INTEGER,
            allowNull: false
        },
        equipment: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        tags: { //se agrego nueva propiedad
            type: DataTypes.STRING,
            allowNull: false
        },
        photos: {
            type: DataTypes.JSON,
            allowNull: false
        }, 
        guideId: {
            type: DataTypes.UUID,
            references: {
                model: 'guides',
                key: 'id'
            }
        }
    }, { timestamps: false });
}