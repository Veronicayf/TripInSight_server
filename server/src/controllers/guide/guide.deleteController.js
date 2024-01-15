const { guide } = require('../../sync/dbConnection')


const deleteGuide = async ( id ) =>{

    const deletedGuide = await guide.destroy({
        where: { id: id },
      });

    return deletedGuide
    
}
    

module.exports={ deleteGuide }