const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('client_purchased', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,            
        },
        tour_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'tours',
                key: 'id'
            }
        }
    },{ timestamps: false })
}