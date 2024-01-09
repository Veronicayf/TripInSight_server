const express = require('express');
require('dotenv').config();
const { sequelize } = require('./db/dbConnection');

// Crear el servidor de express
const app = express();

// Lectura y parseo del body
app.use( express.json() );

// Rutas
app.get('/', async(req, res) => {
    
});

// Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Sevidor corriendo en puerto: ${ process.env.PORT }` );
});