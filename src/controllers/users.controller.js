const dataJson = require('../utils/data')

const usersController = {
  getAllUsers: (req, res) => {
    res.send(dataJson.read().users)
  },
}

module.exports = usersController
