const router = require('express').Router()
const { History, User } = require('../models')
const passport = require('passport')

router.get('/leaderboard', (req, res) => {
	History.find({})
		.then(historys => {
			let result = []
			for (let i = 0; i < historys.length; i++) {
				result.push(historys[i])
			}
			res.json(result)
		})
})

module.exports = router