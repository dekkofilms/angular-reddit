
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('posts', function (table) {
    table.increments();
    table.string('title');
    table.string('content');
    table.string('image_link');
    table.integer('user_id').unsigned();
    table.foreign('user_id').references('id').inTable('users');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('posts');
};
