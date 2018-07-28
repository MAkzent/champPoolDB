
exports.up = function(knex, Promise) {
  return knex.schema.createTable("all_champs", (table) => {
    table
    .increments()
    .index();

    table
    .string('name')
    .unique()
    .notNullable()
    .index();

    table
    .string('tags')

    table
    .string('description')

    table
    .string('icon')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("all_champs");
};
