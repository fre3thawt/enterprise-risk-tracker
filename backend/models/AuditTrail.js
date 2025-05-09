// backend/models/AuditTrail.js
const mongoose = require('mongoose');

const AuditTrailSchema = new mongoose.Schema({
  action: String,
  riskId: String,
  timestamp: Date,
  description: String
});

module.exports = mongoose.model('AuditTrail', AuditTrailSchema);
