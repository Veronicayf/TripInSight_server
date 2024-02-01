const { putGuide } = require('../../controllers/guide/guide.putController')

const putGuideHandler = async (req, res) => {

    const {id, forename, surname, nationality, image, birthDate, biography} = req.body;

    try {
        const updateGuide = await putGuide(id, forename, surname, nationality, image, birthDate, biography)
        if(updateGuide.error) throw updateGuide;
        return res.status(200).json(updateGuide);
    } catch(error) {
        return res.status(400).json(error);
    }
       
}



module.exports = {
    putGuideHandler,
}