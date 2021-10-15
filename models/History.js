const { model, Schema } = require('mongoose')




const History = new Schema({
  Balance: FLOAT,
  Profit: FLOAT,
  Loss: FLOAT,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

module.exports = model('Item', Item)

