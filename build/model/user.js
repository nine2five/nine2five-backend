'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pg = require('pg');

var _pg2 = _interopRequireDefault(_pg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function query(client) {

  return client.query('CREATE TABLE IF NOT EXISTS\n    users(\n      id SERIAL PRIMARY KEY,\n      password VARCHAR(40) NOT NULL,\n      email VARCHAR(256),\n      is_verified BOOLEAN DEFAULT false\n    )');
}

exports.default = query;