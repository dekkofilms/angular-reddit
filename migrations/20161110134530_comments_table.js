
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('comments', function (table) {
    table.increments();
    table.string('content');
    table.integer('user_id').unsigned();
    table.foreign('user_id').references('id').inTable('users');
    table.integer('post_id').unsigned();
    table.foreign('post_id').references('id').inTable('posts');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('comments');
};
