'use strict';

var _pg = require('pg');

var _pg2 = _interopRequireDefault(_pg);

var _user = require('../user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DATABASE_URL = process.env.DATABASE_URL || 'postgres://localhost:5432/nine2five';

var client = new _pg2.default.Client(DATABASE_URL);

client.connect();

var query = (0, _user2.default)(client);

query.on('end', function () {
  return client.end();
});