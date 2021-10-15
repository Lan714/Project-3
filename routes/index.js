const router = require('express').Router()

router.use('/api', require('./userRoutes.js'))
router.use('/api', require('./cryptoRoutes.js'))

module.exports = router