
const server = require('./server/src/server')
const { conn } = require('./server/src/sync/dbConnection');
require('dotenv').config();

conn.sync({ force: true }).then(() => {  //se cambio de true a false

    server.listen(process.env.PORT, () => {
        console.log(`Sevidor corriendo en puerto: ${process.env.PORT}`);
    });

}); 