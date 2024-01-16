const { getToursByName } = require('../../controllers/tours/tours.getByNameController')
const { validationResult } =require('express-validator')
const { formatTour } = require('../../format/formatTour')

const getToursByNameHandler = async (req,res)=>{
    
    
    try {
        
        const { nameTour } = req.query
        console.log(nameTour)
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                ok: false,
                errors: errors.mapped()
            })
        }

      const tours = await getToursByName(nameTour)  
      if(!tours) throw Error ( `There are no tours related to the name: ${nameTour}`)
    //   let tour = formatTour(tours[0].dataValues)
      const formattedTours = tours.map((t) => formatTour(t.dataValues));
      console.log(formattedTours);
      return res.status(200).json(formattedTours)

    } catch (error) {
      res.status(404).json({
        ok: false,
        errors: {
            id: {
                 type: "field",
                //  value: name,
                 msg: error.message,
                 path: "nameTour",
                 location: "query"
                }
            }
        })
    }
}

module.exports = {
    getToursByNameHandler
}
