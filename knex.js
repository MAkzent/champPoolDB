const config = require('./knexfile');
const env = "production";
const knex = require('knex')(config[env]);
module.exports = knex