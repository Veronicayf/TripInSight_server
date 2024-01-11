const server = require('./server/src/server')
const { conn } = require('./server/src/sync/dbConnection');
const { postUser } = require('./server/src/controllers/User/user.postController'); //! para probar postUser.
require('dotenv').config();

conn.sync({ force: true }).then(() => {  

    server.listen(process.env.PORT, () => {
        console.log(`Sevidor corriendo en puerto: ${ process.env.PORT }` );        
    });   

});










//! app.post('/', (req, res) => {        
//     // name, lastname, email, birthdate, nationality, phone
//     const ans = postUser('Raul', 'Contreras', 'ccontrerasvelasco@gmail.com', '30/11/1993', 'mexican', 555555);
//     // console.log(ans);
//     return res.json(ans);
// })    