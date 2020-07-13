const path = require('path');

require('dotenv').config({ path: `${path.dirname(__filename)}/.env` });
const convict = require('convict');

const config = convict({
  env: {
    format: ['production', 'development'],
    default: 'development',
    env: 'NODE_ENV',
  },
  postgresql: {
    host: {
      format: String,
      default: 'localhost',
      env: 'PG_HOST',
    },
    user: {
      format: String,
      default: 'postgres',
      env: 'PG_USER',
    },
    password: {
      format: String,
      default: 'postgres',
      env: 'PG_PASSWORD',
    },
    port: {
      format: Number,
      default: 11000,
      env: 'PG_PORT',
    },
    database: {
      format: String,
      default: 'database_test',
      env: 'PG_DATABASE',
    },
    schema: {
      format: String,
      default: 'boilerplate',
      env: 'PG_SCHEMA',
    },
  },
});

const { env } = config.getProperties();

if (env) {
  config.loadFile(`${path.dirname(__filename)}/${env}.json`);
}

// throws error if config does not conform to schema
config.validate({ allowed: 'strict' });

// so we can operate with a plain old JavaScript object and abstract away convict (optional)
module.exports = config.getProperties();
