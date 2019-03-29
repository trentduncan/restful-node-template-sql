import knex from 'knex';
import config from '../config';

require('../ext/pg/configure');

export default knex(config.databases.primary);
