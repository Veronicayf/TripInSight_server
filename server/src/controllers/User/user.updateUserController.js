const { user } = require("../../sync/dbConnection");

const updateUserController = async (nationality, birthDate, phoneNumber, admin, isBanned, idUser, image) => {    

    try{
        
        const findUser = await user.findByPk(idUser);            
    
        if(!findUser) {
            
            return ({
                error: {
                    idUser: {
                        type: "field",
                        value: idUser,
                        msg: `Any user have id: ${idUser}`,
                        path: "idUser",
                        location: "body"
                    }
                }
            });
            
    
        } else {

            findUser.birthDate = birthDate;
            findUser.phoneNumber = phoneNumber;
            findUser.nationality = nationality;
            findUser.admin = admin;
            findUser.isBanned = isBanned;
            findUser.image = image;
            await findUser.save();
                        
            return findUser;
        }

    } catch(error) {  
        
        return {error: error}
    }

}

module.exports = {
    updateUserController
}