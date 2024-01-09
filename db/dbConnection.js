const {Sequelize} = require('sequelize');
require('dotenv').config();


const sequelize = new Sequelize(process.env.DBNAME, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: 'mysql',
    port: process.env.DBPORT
});

// const sequelize = new Sequelize('mysql://root:mysql://root:cF6d51Ae2Ag6hF22B3HDbeb-aBFedcF1@mysql.railway.internal:3306/railway/railway')

//*DEPLOY LOCAL.-
// const sequelize = new Sequelize('mysql:root:cF6d51Ae2Ag6hF22B3HDbeb-aBFedcF1@monorail.proxy.rlwy.net/railway');

// LOCAL
/* const sequelize = new Sequelize(`postgres:${DB_USER}:${DB_PASSWORD}@${DB_HOST}/locanjeamos`,
  {
    logging: false,
    native: false,
  }
);  */


// DEPLOY PARA TODOS.
//  const sequelize = new Sequelize(DB_DEPLOY, {
//      logging: false,
//      native: false,
//   });
 

module.exports = {
    sequelize
}