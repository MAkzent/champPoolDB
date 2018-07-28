
exports.up = function(knex, Promise) {
  return knex.schema.createTable("my_champs", (table) => {
    table
    .increments()
    .index();

    table
    .integer("champ_id")
    .unsigned()
    .notNullable();

    table
    .timestamp("added_at").defaultTo(knex.fn.now())

    table
    .foreign("champ_id")
    .references("id")
    .inTable("all_champs");

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("my_champs");
};
