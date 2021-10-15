const router = require('express').Router()
const { Crypto, User } = require('../models')
const passport = require('passport')

router.post('/cryptos', passport.authenticate('jwt'), async function (req, res) {
  const item = await Item.create({ ...req.body, user: req.user._id })
  await User.findByIdAndUpdate(req.user._id, { $push: { items: item._id } })
  res.json(item)
})



router.put('/cryptos/:id', passport.authenticate('jwt'), async function (req, res) {
  await Item.findByIdAndUpdate(req.params.id, { $set: req.body })
  res.sendStatus(200)
})



router.delete('/cryptos/:id', passport.authenticate('jwt'), async function (req, res) {
  await Item.findByIdAndDelete(req.params.id)
  await User.findByIdAndUpdate(req.user._id, { $pull: { items: req.params.id } })
  res.sendStatus(200)
})

module.exports = router