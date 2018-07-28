const { getAllChamps } = require("../helper")
const allChamps = getAllChamps();

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('all_champs').del()
    .then(function () {
      // Inserts seed entries
      return knex('all_champs').insert(allChamps);
    });
};
