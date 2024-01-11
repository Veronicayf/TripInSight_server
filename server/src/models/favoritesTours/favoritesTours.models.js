const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('favorites_tours', {
        id: {
          type: DataTypes.UUID,
          allowNull: false,
          primaryKey: true,          
        },    
      
        // Llave foránea hacia tour_id
        tour_id: {
          type: DataTypes.UUID,
          allowNull: false,
          references: {
            model: 'tours',
            key: 'id',
          },
        },
    }, { timestamps: false });
}