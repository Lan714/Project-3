const { model, Schema } = require('mongoose')

const History = new Schema({
  Weekly_info: [{
    weekNumber: Number,
    cash_balance: String,
    crypto_balace: [{
      crypto_name: String,
      dollar_value: String
    }],
    transaction: [{
      date: Date,
      crypto_name: String,
      side: String,
      price: String,
      amount: String,
      total: String
    }]
  }],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

module.exports = model('History', History)

