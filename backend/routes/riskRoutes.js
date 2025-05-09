// backend/routes/riskRoutes.js
const express = require('express');
const router = express.Router();
const Risk = require('../models/Risk');

router.get('/', async (req, res) => {
  const risks = await Risk.find();
  res.json(risks);
});

router.post('/', async (req, res) => {
  const risk = new Risk(req.body);
  await risk.save();
  res.json(risk);
});

module.exports = router;
