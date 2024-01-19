const { user } = require("../../sync/dbConnection")

const deleteUser = async (id) =>{

    try {
           
        const deletedUser = await user.findByPk(id);

        if(!deletedUser) {
            return ({
                error: {
                    idUser: {
                        type: "field",
                        value: id,
                        msg: `Any user have id: ${id}`,
                        path: "id",
                        location: "param"
                    }
                }
            });     
        } else {

            await deletedUser.destroy();

            return ({
                success: `User with ID ${id} has been deleted successfully`
            });
        }

    } catch (error) {
    
        return ({
           msg: error  
        })
        
    }
      
}

module.exports= {
    deleteUser
}