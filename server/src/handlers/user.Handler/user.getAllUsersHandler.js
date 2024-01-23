const { getAllUsers } = require("../../controllers/User/user.getAllUsersController");

const getAllUsersHandler = async (req, res) => {

    const {page, pagesize} = req.query;

    try{
        const users = await getAllUsers(page, pagesize);

        if(users.length === 0) {
            return res.status(404).json({
                errors: {
                    msg: 'there are no users on database',
                }
            }); 
        }
        
        if(users.errors) {
            return res.status(400).json(users);
        }

        return res.json(users);

    }catch(error) {
        return res.status(400).json({error: error});
    }
    
}

module.exports = {
    getAllUsersHandler
}