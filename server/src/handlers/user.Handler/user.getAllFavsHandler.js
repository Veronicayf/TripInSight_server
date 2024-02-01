const { getAllFavs } = require("../../controllers/User/user.getAllFavsController")
//const { validationResult } = require('express-validator');


const getAllFavsHandler = async (req, res) => {

    const { id } = req.params

    try {

        const allFavs = await getAllFavs(id)
        if (allFavs.length === 0) {
            return res.status(404).json({
                errors: {
                    msg: `there are no favs for the user ${allFavs.name} with the id ${id}`,

                }
            });
        }

        if (allFavs.errors) {
            return res.status(400).json(allFavs);
        }

        return res.json(allFavs)
    } catch (error) {
        return res.status(400).json({ error: error });
    }
}

module.exports = { getAllFavsHandler }