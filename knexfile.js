module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      database: "champ_pools_db",
    },
    port: 5432,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   }
  // }
};