'use strict';

const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
require('./build/lib/db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(morgan('dev'));

const server = module.exports = app.listen(PORT, function() {
  console.log(`Server up on ${PORT}`);
});

server.isRunning = true;
