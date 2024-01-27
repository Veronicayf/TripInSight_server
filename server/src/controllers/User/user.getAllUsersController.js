const { user } = require("../../sync/dbConnection")

const getAllUsers = async(page, pageSize) => {
        
    if(parseInt(page) <= 0 ) {
        return ({
            errors: {
                page: {
                    type: "query",
                    value: "page",
                    msg: 'page should be greather than 0 ',
                    path: "page",
                    location: "query"
                }
            }
        })
    }

    if(parseInt(pageSize) <= 0 ) {
        return ({
            errors: {
                page: {
                    type: "query",
                    value: "pageSize",
                    msg: 'pageSize should be greather than 0 ',
                    path: "pageSize",
                    location: "query"
                }
            }
        })
    }

    const offset = (page - 1) * pageSize;

    try{
        
        const users = await user.findAll({
    
            limit: parseInt(pageSize),
            offset: parseInt(offset)
    
        });
    
        return users;
    } catch(error) {

        throw error;

    }

}

module.exports = {
    getAllUsers
}