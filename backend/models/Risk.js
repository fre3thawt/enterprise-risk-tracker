// backend/models/Risk.js
const mongoose = require('mongoose');

const RiskSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  likelihood: String,
  impact: String,
  status: String,
  owner: String
}, { timestamps: true });

module.exports = mongoose.model('Risk', RiskSchema);
