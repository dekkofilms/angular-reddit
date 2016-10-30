var app = angular.module('reddit', []);

app.controller('posts', ['$scope', ($scope) => {
  $scope.view = {};
  $scope.view.posts = [
    {
      title : 'This is my First Post!',
      content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      imageLink : 'https://twistedsifter.files.wordpress.com/2012/05/funny-alpacas-with-awesome-amazing-hilarious-hair-6.jpg',
      date : new Date (),
      author : 'Taylor King',
      comments : ['This is an awesome lorem idea', 'Why do you even try?'],
      count: 0,
    },
  ]

  $scope.upvote = (id) => {
    console.log(id);
  }
}]);
