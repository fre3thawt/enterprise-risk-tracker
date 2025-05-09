// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const riskRoutes = require('./routes/riskRoutes');
const auditRoutes = require('./routes/auditRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/enterprise-risk-db');

app.use('/risks', riskRoutes);
app.use('/audit-trail', auditRoutes);

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
