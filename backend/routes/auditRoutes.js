// backend/routes/auditRoutes.js
const express = require('express');
const router = express.Router();
const AuditTrail = require('../models/AuditTrail');

router.post('/', async (req, res) => {
  const log = new AuditTrail(req.body);
  await log.save();
  res.json(log);
});

module.exports = router;
