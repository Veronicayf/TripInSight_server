const { toursPutStatusController } = require("../../controllers/tours/tours.putStatusController");


const toursPutStatusHandler = async(req, res) => {
    
    const {status, idTour} = req.body;
    try {
        console.log('handler!!!')
        const response = await toursPutStatusController(status, idTour);
        
        if(response.error) throw response;

        return res.json(response);

    } catch (error) {

        return res.status(400).json(error);

    }

}

module.exports = {
    toursPutStatusHandler
}