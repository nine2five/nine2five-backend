'use strict';

const cors = require('cors');
const morgan = require('morgan');
const express = require('express');

const sequelize = require('./src/lib/db-connection').sequelize;
const authRouter = require('./src/route/auth-router');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(morgan('dev'));

app.use(authRouter);

const server = module.exports = app.listen(PORT, function() {
  if (require.main === module) sequelize.sync({});
  console.log(`Server up on ${PORT}`);
});

server.isRunning = false;
