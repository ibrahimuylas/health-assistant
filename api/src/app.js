const express = require('express');
var cors = require('cors');

const app = express();

app.use(cors());

const conditionRoutes = require('./controllers/conditions.js')
app.use('/conditions', conditionRoutes);

module.exports = app;