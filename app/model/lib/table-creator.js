'use strict';

import pg from 'pg';

import User from '../user';
import Profile from '../profile';

const DATABASE_URL = process.env.DATABASE_URL || 'postgres://localhost:5432/nine2five';

const client = new pg.Client(DATABASE_URL);

client.connect();

User(client)
.then(() => Profile(client).on('end', () => client.end()));
