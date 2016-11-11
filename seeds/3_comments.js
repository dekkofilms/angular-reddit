
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('comments').insert({id: 1, content: 'this is crap!', user_id: 1, post_id: 3}),
        knex('comments').insert({id: 2, content: 'this is awesome!', user_id: 2, post_id: 2}),
        knex('comments').insert({id: 3, content: 'this is somewhat cool, but i hate it still', user_id: 3, post_id: 1})
      ]);
    });
};
