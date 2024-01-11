const express = require('express');
require('dotenv').config();
const { sequelize } = require('./server/src/sync/dbConnection');

// Crear el servidor de express
const app = express();

// Lectura y parseo del body
app.use( express.json() );

// Rutas
app.get('/', async(req, res) => {
    
});

// Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Server running on Port: ${ process.env.PORT }` );
});