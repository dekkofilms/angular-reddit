
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('posts').insert({id: 1, title: 'Post 1', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', image_link: 'https://twistedsifter.files.wordpress.com/2012/05/funny-alpacas-with-awesome-amazing-hilarious-hair-6.jpg?w=522&h=568', user_id: 1}),
        knex('posts').insert({id: 2, title: 'Post 2', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', image_link: 'https://twistedsifter.files.wordpress.com/2012/05/funny-alpacas-with-awesome-amazing-hilarious-hair-6.jpg?w=522&h=568', user_id: 2}),
        knex('posts').insert({id: 3, title: 'Post 3', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', image_link: 'https://twistedsifter.files.wordpress.com/2012/05/funny-alpacas-with-awesome-amazing-hilarious-hair-6.jpg?w=522&h=568', user_id: 3}),
      ]);
    });
};
