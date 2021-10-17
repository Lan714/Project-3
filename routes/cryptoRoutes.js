const router = require('express').Router()
const { Crypto, User } = require('../models')
const passport = require('passport')

router.post('/crypto', passport.authenticate('jwt'), async function (req, res) {
  const crypto = await Crypto.create({ ...req.body, user: req.user._id })
  await User.findByIdAndUpdate(req.user._id, { $push: { cryptos: crypto._id } })
  res.json(crypto)
})



router.put('/crypto/:id', passport.authenticate('jwt'), async function (req, res) {
  await Crypto.findByIdAndUpdate(req.params.id, { $set: req.body })
  res.sendStatus(200)
})



router.delete('/crypto/:id', passport.authenticate('jwt'), async function (req, res) {
  await Crypto.findByIdAndDelete(req.params.id)
  await User.findByIdAndUpdate(req.user._id, { $pull: { cryptos: req.params.id } })
  res.sendStatus(200)
})

module.exports = router