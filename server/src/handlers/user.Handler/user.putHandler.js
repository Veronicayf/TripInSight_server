const { getUserById } = require('../../controllers/User/user.getController');
const { putUser } = require('../../controllers/User/user.putController');


const putUserHandler = async (req, res) => {

    const { id, name, lastname, email, birthdate, nationality, phone } = req.body;
    
    try {

        const findUser = await getUserById(id);
        if (!findUser) throw Error(`The user with the id : ${id} does not exist`);
        const user = await putUser( name, lastname, email, birthdate, nationality, phone );

        return res.status(200).json(user);
        
    } catch (error) {
        return res.status(404).json({error: error.message})
    }
}


module.exports = {
    putUserHandler,
}
