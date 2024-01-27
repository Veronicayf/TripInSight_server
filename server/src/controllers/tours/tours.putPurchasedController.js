const { tour } = require('../../sync/dbConnection');

const purchasedTour = async (tourId, stock) => {
    stock = parseInt(stock);
    console.log("soy el stock", stock)

    try {
        if (stock < 1) {
            throw ({
                msg: 'Stock must be greather than 0'
            });
        }
        // return {msg: 'Se llego al controller de purchasedTour'};

        const foundTour = await tour.findByPk(tourId);

        if (!foundTour) {
            throw ({
                msg: `The tour with id: ${tourId} doesnt exists`
            });
        }

        const aux = foundTour.subscription + stock;

        if (aux > foundTour.capacity) {
            throw {
                msg: 'No hay lugares disponibles'
            }
        }

        // foundTour.capacity -= stock;
        foundTour.subscription += stock;
        await foundTour.save();
        // return foundTour;
        const response = {
            msg: 'reserva exitosa ',
            capacity: foundTour.capacity,
            subscription: foundTour.subscription
        }

        return response

    } catch (error) {

        throw error;

    }


}


module.exports = {
    purchasedTour
}

// para buscar en postman
// {
//     "tourId":"a16714c6-dda5-4b7e-9810-0e0863cc1050",
//     "stock": "1"
//     }
// "subscription": 10 y ese es el campo que ustedes tienen que llamar
