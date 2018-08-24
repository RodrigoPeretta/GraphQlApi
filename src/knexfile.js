// Update with your config settings.

const { password } = require('../.env')

module.exports = {

    client: 'postgresql',
    connection: {
      port: 5432,
      host: "ec2-54-235-242-63.compute-1.amazonaws.com",
      database: "dcemdpp692dqr9",
      user: "woxwrwwkpkzlss",
      password: password,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
};

var pg = require('pg');
pg.defaults.ssl = true;