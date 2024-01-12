const { user } = require("../../sync/dbConnection")

const getUserById = async (id) =>{
          
  const foundUser = await user.findByPk(id);        
          
  return foundUser;      
  
}

module.exports={getUserById}