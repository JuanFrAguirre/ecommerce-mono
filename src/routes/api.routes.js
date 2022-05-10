const router = require('express').Router()
const apiController = require('../controllers/api.controller')
const productsRouter = require('../routes/products.routes')
const usersRouter = require('../routes/users.routes')

router.get('/', apiController.api)

router.use('/products', productsRouter).use('/users', usersRouter)

module.exports = router
