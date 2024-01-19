const { deleteUser } = require('../../controllers/User/user.deleteController')

const deleteUserHandler = async (req, res) => {

    const { id } = req.params;

    try {
        
        const ans = await deleteUser(id);
                
        return res.json(ans);

    } catch (error) {

       return res.json(error);

    }
}


module.exports = {
    deleteUserHandler,
}
