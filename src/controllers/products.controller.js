const dataJson = require('../utils/data')

const productsController = {
  getAllProducts: (req, res) => {
    res.send(dataJson.read().products)
  },
}

module.exports = productsController
