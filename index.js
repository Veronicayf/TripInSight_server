const express = require('express');
require('dotenv').config();

const { conn } = require('./server/src/sync/dbConnection');



// Crear el servidor de express
const app = express();

// Lectura y parseo del body
app.use( express.json() );

// Rutas
// app.get('/', async(req, res) => {
//     console.log(conn, 'linea 14');    
//     // console.log(sequelize, 'linea 20');
//     res.json({
//         msg: 'hola'
//     })
// });
conn.sync({ force: true }).then(() => {  

    app.listen(process.env.PORT, () => {
        console.log(`Sevidor corriendo en puerto: ${ process.env.PORT }` );        
    });   
});  

