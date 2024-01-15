require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const guideModel = require('../models/guide/guide.model');
const tourModel = require('../models/tour/tour.model');
const userModel = require('../models/user/user.model');
const favorites_toursModel = require('../models/favoritesTours/favoritesTours.models');
const client_purchasedModel = require('../models/clientPurchased/clientPurchased.model');
const guide_toursModel = require('../models/guideTours/guideTours.model');

//? Base de datos desplegada.
// const sequelize = new Sequelize(process.env.DBNAME, process.env.USER, process.env.PASSWORD, {
//     host: process.env.HOST,
//     dialect: 'mysql',
//     port: process.env.DBPORT
// });

//? Para uso de mi base de datos local
// const sequelize = new Sequelize('tripinsight', 'root', 'hola1234', {
//     host: 'localhost',
//     dialect: 'mysql',
//     logging: false,
// });

//base de datos local con variables en el .env
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false,
});

guideModel(sequelize);
tourModel(sequelize);
userModel(sequelize);

//tablas intermedias.
favorites_toursModel(sequelize);
client_purchasedModel(sequelize);
guide_toursModel(sequelize);


// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring.
const { user, guide, tour, favorites_tours, client_purchased, guide_tours } = sequelize.models;

favorites_tours.hasMany(user, {
    foreignKey: 'favorites_tours'
});

client_purchased.hasMany(user, {
    foreignKey: 'purchased_tours'
});

guide_tours.hasMany(guide, {
    foreignKey: 'guide_tours'
});

guide.hasMany(tour, {
   foreignKey: 'guide' 
});

module.exports = {
    ...sequelize.model,
    conn: sequelize,
    user,
    guide,
    tour,
    favorites_tours,
    client_purchased,
    guide_tours
};

