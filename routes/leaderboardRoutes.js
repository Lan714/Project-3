const router = require('express').Router()
const { History, User } = require('../models')
const passport = require('passport')

router.get('/leaderboard', (req, res) => {
	History.find({ weekNumber: req.headers.number })
		.then(historys => {
			let result = []
			for (let i = 0; i < historys.length; i++) {
				let username = historys[i].user
				let profit = historys[i].profit
				result.push({ username, profit })
			}

			result.sort((a, b) => {
				return b.profit - a.profit
			})

			res.json(result)
			
		})
})

module.exports = router