const mongoose = require('mongoose');

const TradeSchema = new mongoose.Schema({
  ticket: String,
  type: String,
  symbol: String,
  volume: Number,
  sl: Number,
  tp: Number,
  openedAt: Date,
  openPrice: Number,
  closedAt: Date,
  closePrice: Number,
  swaps: Number,
  commission: Number,
  profit: Number,
}, { timestamps: true });

module.exports = mongoose.model('Trade', TradeSchema);
