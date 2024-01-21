const { user } = require('../../sync/dbConnection')

const getUserByEmail = async (email) => {
    try {
        const existingUser = await user.findOne({ where: { email: email } });
        return existingUser;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getUserByEmail
};