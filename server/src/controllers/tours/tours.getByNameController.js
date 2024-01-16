const { tour } = require('../../sync/dbConnection')
const  {Op} = require('sequelize')


const getToursByName = async(name) =>{
    if (name){
        const tours = await tour.findAll({ where: { nameTour:
           {[Op.like] :`%${name}%`} } })
          
         return tours
     }
        throw Error ("There are no tours with that name")
     }
     
 
 module.exports = { getToursByName }