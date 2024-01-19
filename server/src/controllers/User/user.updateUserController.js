const { user } = require("../../sync/dbConnection");

const updateUserController = async (nationality, birthDate, phoneNumber, idUser) => {    

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
            await findUser.save();
                        
            return findUser;
        }

    } catch(error) {        
        return (
            {
                error: {
                    idUser: {
                        type: "field",
                        value: "db",
                        msg: error,
                        path: "idUser",
                        location: "db"
                    }
                }
            }
        )
    }

}

module.exports = {
    updateUserController
}