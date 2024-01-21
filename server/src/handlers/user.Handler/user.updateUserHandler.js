const { updateUserController } = require("../../controllers/User/user.updateUserController");

const updateUserHandler = async(req, res) => {

    const {nationality, birthDate, phoneNumber, admin, isBanned, idUser} = req.body;

    try {
        const updatedUser = await updateUserController(nationality, birthDate, phoneNumber, admin, isBanned, idUser)
        
        if(updatedUser.error) throw updatedUser.error;

        return res.json(updatedUser);
    } catch(error) {
        return res.status(500).json(error);
    }
       
}


module.exports =  {
    updateUserHandler
}