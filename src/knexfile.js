// Update with your config settings.

module.exports = {

    client: 'postgresql',
    connection: {
      port: 5432,
      host: "ec2-54-235-242-63.compute-1.amazonaws.com",
      database: "dcemdpp692dqr9",
      user: "woxwrwwkpkzlss",
      password: "e52ec62d2d213025cbaec0a5d80bb48e24120515840e8b38e2fcc6bb399411ba",
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