'use strict';

const pg = require('pg')

const User = require('../user')

const DATABASE_URL = process.env.DATABASE_URL || 'postgres://localhost:5432/nine2five';

const client = new pg.Client(DATABASE_URL);

client.connect();

const query = User(client);

query.on('end', () => client.end());
