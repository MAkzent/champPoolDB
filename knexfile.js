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
  production: {
    client: 'postgresql',
    connection: {
      database: 'postgres://siweyqhfgunvjz:ac8a550334e3ecae037038c4a5e409b102f89546edfe11ac2da443d16b037f7c@ec2-23-21-216-174.compute-1.amazonaws.com:5432/d4f93mbkr3s0fb',
    }
  }
};