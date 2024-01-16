const formatTour = (data) => {
    const tour = {
        id: data.id,
        nameTour: data.nameTour,
        initialDate: data.initialDate,
        endDate: data.endDate,
        image: data.image,
        continent: data.continent,
        country: data.country,
        city: data.city,
        type: data.type,
        capacity: data.capacity,
        description: data.description,
        season: data.season,
        status: data.status,
        price: data.price,
        equipment: data.equipment,
        guide: data.guide
    };
    return tour;
}


module.exports = {
    formatTour,
}