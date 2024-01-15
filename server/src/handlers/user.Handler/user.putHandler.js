const { getUserById } = require('../../controllers/User/user.getController');
const { putUser } = require('../../controllers/User/user.putController');


const putUserHandler = async (req, res) => {


    const { id, forename, surname, nationality, image, birthDate, email, password, phoneNumber } = req.body;

    
    try {

        const findUser = await getUserById(id);
        if (!findUser) throw Error(`The user with the id : ${id} does not exist`);
      
        console.log(findUser);
        return res.status(200);
        const user = await putUser( forename, surname, nationality, image, birthDate, email, password, phoneNumber );


        return res.status(200).json(user);
        
    } catch (error) {

        return res.status(404).json({errors: {
            id: {
                type: 'field',
                value: id,
                msg: error.message,
                path: "id" ,
                location: "body"
            }
        }})

    }
}


module.exports = {
    putUserHandler,
}
