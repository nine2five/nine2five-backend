'use strict';

import pg from 'pg';

import User from '../user';
import Offer from '../offer';
import Resume from '../resume';
import Status from '../status';
import Contact from '../contact';
import Profile from '../profile';
import Category from '../category';
import Application from '../application';

const DATABASE_URL = process.env.DATABASE_URL || 'postgres://localhost:5432/nine2five';
const client = new pg.Client(DATABASE_URL);

client.connect();

User(client)
.then(() => Profile(client))
.then(() => Category(client))
.then(() => Status(client))
.then(() => Resume(client))
.then(() => Contact(client))
.then(() => Offer(client))
.then(() => Application(client).on('end', () => client.end()));
