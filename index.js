
const server = require('./server/src/server')
const { conn } = require('./server/src/sync/dbConnection');
require('dotenv').config();

conn.sync({ force: true }).then(() => {  //true=borra todo



    server.listen(PORT, () => {
        console.log(`Sevidor corriendo en puerto: ${PORT}`);
    });

}); 