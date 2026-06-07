const express = require('express');
const router = require('./routes/floodguard.routes');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/floodguard', router);

module.exports = app;