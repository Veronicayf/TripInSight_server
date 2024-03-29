const { purchased } = require("../../sync/dbConnection");

const getAllPurchasedController = async(page, pageSize) => {
    

    try {

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

        const results = purchased.findAll({
            limit: parseInt(pageSize),
            offset: parseInt(offset)
        });

        return results;

    } catch (error) {

        throw error;

    }
  


}

module.exports = {
    getAllPurchasedController
}