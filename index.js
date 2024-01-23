
const server = require('./server/src/server')
const { conn } = require('./server/src/sync/dbConnection');
require('dotenv').config();
const PORT = 4000

conn.sync({ force: false }).then(() => {  //true=borra todo

    server.listen(PORT, () => {
        console.log(`Sevidor corriendo en puerto: ${PORT}`);
    });

}); 