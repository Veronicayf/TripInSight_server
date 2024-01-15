const { getAllUsers } = require("../../controllers/User/user.getAllUsersController");
const { user } = require("../../sync/dbConnection")


const getAllUsersHandler = async (req, res) => {

    const users = await getAllUsers();

    if(users.length === 0) {
        return res.status(404).json({
            errors: {
                msg: 'there is no users on database',
            }
        });
    }
    
    return res.json(users);
    
}

module.exports = {
    getAllUsersHandler
}