const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('reviews', {        
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
        },
        tourId:{
            type: DataTypes.UUID,
            references: {
                model: 'tours',
                key: 'id'
            },
            allowNull: false,
        },
        userId:{
            type: DataTypes.UUID,
            references: {
                model: 'users',
                key: 'id'
            },
            allowNull: false
        },
        review: {
            type: DataTypes.TEXT,
            allowNull: false
        },
    }, { timestamps: false });
}