const { model, Schema } = require('mongoose')




const History = new Schema({
  Balance: String,
  Profit: String,
  Loss: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

module.exports = model('Item', Item)

