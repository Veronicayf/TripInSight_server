const { tour } = require('../../sync/dbConnection')

const deleteTour = async (id, res) => {
  try {
    const tourToDelete = await tour.findByPk(id);

    if (!tourToDelete) {
      return res.status(404).json({ error: 'Tour not found' });
    }

    await tourToDelete.destroy();
    return res.status(200).json({ message: 'Tour deleted successfully' });
  } catch (error) {
    console.log('controller error', error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { deleteTour }