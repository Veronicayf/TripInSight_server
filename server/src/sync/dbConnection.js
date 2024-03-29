require('dotenv').config();
const { Sequelize } = require('sequelize');
const guideModel = require('../models/guide/guide.model');
const tourModel = require('../models/tour/tour.model');
const userModel = require('../models/user/user.model');
const purchasedModel = require('../models/clientPurchased/clientPurchased.model');
const reviewsModel = require('../models/reviews/reviews')

//? Base de datos desplegada.
const sequelize = new Sequelize(process.env.DBNAME, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: 'mysql',
    port: process.env.DBPORT
});

//? Para uso de mi base de datos local
// const sequelize = new Sequelize('tripinsight', 'root', 'hola1234', {
//     host: 'localhost',
//     dialect: 'mysql',
//     logging: false,
// });

//base de datos local con variables en el .env
// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//     host: process.env.DB_HOST,
//     dialect: 'mysql',
//     logging: false,
// });

guideModel(sequelize);
tourModel(sequelize);
userModel(sequelize);
purchasedModel(sequelize);
reviewsModel(sequelize);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring.
const { user, guide, tour, purchased, reviews } = sequelize.models;

//? referencias a tablas.
tour.belongsTo(guide, {
    foreignKey: 'guideId'
});
guide.belongsToMany(tour, { through: 'guide_tours', timestamps: false });
tour.belongsToMany(guide, { through: 'guide_tours', timestamps: false });

user.belongsToMany(tour, { through: 'favorites_tours', timestamps: false });
tour.belongsToMany(user, { through: 'favorites_tours', timestamps: false });

purchased.belongsTo(tour, { foreignKey: 'tourId' });
purchased.belongsTo(user, { foreignKey: 'userId' });

reviews.belongsTo(user, { foreignKey: 'userId' });
reviews.belongsTo(tour, { foreignKey: 'tourId' });


const { models } = sequelize;
module.exports = {
    ...sequelize.model,
    models,
    conn: sequelize,
    user,
    guide,
    tour,
    purchased,
    reviews
};