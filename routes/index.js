const router = require('express').Router()

router.use('/api', require('./userRoutes.js'))
router.use('/api', require('./cryptoRoutes.js'))
router.use('/api', require('./historyRoutes.js'))

module.exports = router