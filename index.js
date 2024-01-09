const express = require('express');
require('dotenv').config();
const { sequelize } = require('./db/dbConnection');
var cors = require('cors')

// Crear el servidor de express
const app = express();

// Lectura y parseo del body
app.use( express.json() );
app.use(cors());

// Rutas
app.get('/', async(req, res) => {

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        return res.json ({
            "connection": "succesfuly"
        })
      } catch (error) {
        console.error('Unable to connect to the database:', error);
        return res.json ({
            "connection": "failed"
        })
      }
});

// Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Sevidor corriendo en puerto: ${ process.env.PORT }` );
});