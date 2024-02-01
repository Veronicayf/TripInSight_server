const { guide } = require('../../sync/dbConnection')


const deleteGuide = async ( id ) =>{

    
  try {
    const deleteGuide = await guide.findByPk(id);

    if(!deleteGuide) {
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

      await deleteGuide.destroy();

      return ({
        success: `User with ID ${id} has been deleted successfully`
      });
    }
  } catch (error) {
    return ({
      msg: error
    })
  }
  
  
  // const deletedGuide = await guide.destroy({
  //     where: { id: id },
  //   });

    return deletedGuide
    
}
    

module.exports={ deleteGuide }