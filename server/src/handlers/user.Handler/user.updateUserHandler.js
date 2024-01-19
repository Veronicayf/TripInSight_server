const { updateUserController } = require("../../controllers/User/user.updateUserController");

const updateUserHandler = async(req, res) => {

    const {nationality, birthDate, phoneNumber, idUser} = req.body;

    try {
        const updatedUser = await updateUserController(nationality, birthDate, phoneNumber, idUser)
        return res.json(updatedUser);
    } catch(error) {
        return res.status(404).json(error);
    }
       
}


module.exports =  {
    updateUserHandler
}