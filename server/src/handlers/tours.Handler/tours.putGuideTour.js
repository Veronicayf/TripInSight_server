const { putGuideController } = require("../../controllers/tours/tours.putGuideController");
const { guide, tour } = require("../../sync/dbConnection")

const putGuideTourHandler = async(req, res) => {
    
    const {tourId, guideId} = req.body;
    
    const guideFounded = await guide.findByPk(guideId);
    const tourFounded = await tour.findByPk(tourId);

    if(!guideFounded) {
        return res.status(404).json({
            erorrs: {
                guideId: {
                    type: "field",
                    value: guideId,
                    msg: `Any guide have id: ${guideId}`,
                    path: "guideId",
                    location: "body"
                }
            }
        })
    }
    
    if(!tourFounded) {
        return res.status(404).json({
            erorrs: {
                guideId: {
                    type: "field",
                    value: tourId,
                    msg: `Any tour have id: ${tourId}`,
                    path: "tourId",
                    location: "body"
                }
            }
        });
    }

    putGuideController(tourFounded, guideFounded, guideId);
                       
    return res.json(tourFounded);
}

module.exports = {
    putGuideTourHandler
}