
const server = require('./server/src/server')
const { conn } = require('./server/src/sync/dbConnection');
require('dotenv').config();


const PORT = 4000
conn.sync({ force: false }).then(() => {  //se cambio de true a false

    server.listen(PORT, () => {
        console.log(`Sevidor corriendo en puerto: ${PORT}`);
    });

}); 