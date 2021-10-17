const { model, Schema } = require('mongoose')

const User = new Schema({
  name: String,
  email: String,
  crypto: [{
    type: Schema.Types.ObjectId,
    ref: 'Crypto'
  }]
})

User.plugin(require('passport-local-mongoose'))

module.exports = model('User', User)