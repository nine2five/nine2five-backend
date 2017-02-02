'use strict';

const cors = require('cors');
const morgan = require('morgan');
const express = require('express');

const sequelize = require('./app/lib/db-connection').sequelize;
const authRouter = require('./app/route/auth-router');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(morgan('dev'));

app.use(authRouter);

const server = module.exports = function() {
  app.listen(PORT, function() {
    sequelize.sync({});
    console.log(`Server up on ${PORT}`);
  });
};

server();

server.isRunning = false;
