const { putGuide } = require('../../controllers/guide/guide.putController')

const putGuideHandler = async (req, res) => {

    const {id, forename, surname, nationality, image, birthDate, biography} = req.body;

    try {
        const updateGuide = await putGuide(id, forename, surname, nationality, image, birthDate, biography)
        return res.json(updateGuide);
    } catch(error) {
        return res.status(404).json(error);
    }
       
}



module.exports = {
    putGuideHandler,
}