const pgPromise = require('pg-promise');

const config = require('../../environment');

const pgp = pgPromise({ capSQL: true, schema: config.postgresql.schema });

const db = pgp({
  host: config.postgresql.host,
  user: config.postgresql.user,
  password: config.postgresql.password,
  port: config.postgresql.port,
  database: config.postgresql.database,
});

module.exports = { db, pgp };
