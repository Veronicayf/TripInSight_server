const { guide } = require("../../sync/dbConnection");

const putGuide = async(id, forename, surname, nationality, image, birthDate, biography) => {    

    try{

        const findGuide = await guide.findByPk(id);       
        
        if(!findGuide) {
            return ({
                error: {
                    id: {
                        type: "field",
                        value: id,
                        msg: `Any user have id: ${id}`,
                        path: "Id",
                        location: "body"
                    }
                }
            });
            
    
        } else {

            findGuide.forename = forename;
            findGuide.surname = surname;
            findGuide.nationality = nationality;
            findGuide.image = image;
            findGuide.birthDate = birthDate;
            findGuide.biography = biography;
           
            await findGuide.save();        
            return findGuide;
        }

    } catch(error) {          
        return {error: error}
    }
}

module.exports = {
    putGuide
}