
exports.up = function(knex, Promise) {
  return knex.schema.createTable("amphibians", function (table) {
    table.increments()
    table.text("name")
    table.text("type")
    table.integer("size")
    table.text("image_url")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("amphibians")
};
