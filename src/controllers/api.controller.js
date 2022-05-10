const dataJson = require('../utils/data')

const apiController = {
  root: (req, res) => res.redirect('/api'),
  api: (req, res) => {
    res.send('welcome to ecommerce_mono!')
  },
  notFound: (req, res) => {
    res.sendStatus(404)
  },
}

module.exports = apiController
