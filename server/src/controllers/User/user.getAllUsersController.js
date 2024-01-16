const { user } = require("../../sync/dbConnection")

const getAllUsers = async() => {

    
    const allUsers = await user.findAll();

    return allUsers;

}

module.exports = {
    getAllUsers
}