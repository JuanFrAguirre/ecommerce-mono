const router = require('express').Router()
const apiRouter = require('./api.routes')
const apiController = require('../controllers/api.controller')

router.use('/api', apiRouter)

router.get('/', apiController.root).get('*', apiController.notFound)

module.exports = router
