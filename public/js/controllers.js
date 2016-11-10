app.controller('posts', ['$scope', ($scope) => {

  $scope.view = {};
  $scope.view.newpost = false;
  $scope.view.comments = false;
  $scope.view.addcomment = false;
  $scope.view.idCount = 2;
  $scope.view.comment = null;

  $scope.view.sorter = '-count';

  $scope.view.posts = [
    {
      id : 0,
      title : 'This is my First Post!',
      content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      imageLink : 'https://twistedsifter.files.wordpress.com/2012/05/funny-alpacas-with-awesome-amazing-hilarious-hair-6.jpg',
      date : new Date (),
      author : 'Taylor King',
      comments : ['This is an awesome lorem idea', 'Why do you even try?'],
      count: 0,
    },
    {
      id : 1,
      title : 'This is my Second Post!',
      content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageLink : 'https://twistedsifter.files.wordpress.com/2012/05/funny-alpacas-with-awesome-amazing-hilarious-hair-5.jpg',
      date : new Date (),
      author : 'Jesse Witt',
      comments : ['Derka derka derka'],
      count: 0,
    },
    {
      id : 2,
      title : 'This is my Third Post!',
      content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageLink : 'https://twistedsifter.files.wordpress.com/2012/05/funny-alpacas-with-awesome-amazing-hilarious-hair-4.jpg',
      date : new Date (),
      author : 'Andrew Soderlind',
      comments : [],
      count: 0,
    },
  ]

  $scope.vote = (id, flag) => {
    if (flag === "up") {
      $scope.view.posts[id].count++;
    }

    if (flag === "down") {
      $scope.view.posts[id].count--;
    }
  }

  $scope.submit = (isValid) => {
    if (isValid) {
      $scope.view.newpost = !$scope.view.newpost;
      $scope.view.idCount++;

      //defining the new post submission
      let newPost = {};
      newPost.id = $scope.view.idCount;
      newPost.title = $scope.title;
      newPost.content = $scope.description;
      newPost.imageLink = $scope.imageLink;
      newPost.date = new Date ();
      newPost.author = $scope.author;
      newPost.comments = [];
      newPost.count = 0;

      //pushing into my posts array
      $scope.view.posts.push(newPost)
      //
      //clear form
      $scope.title = '';
      $scope.description = '';
      $scope.imageLink = '';
      $scope.author = '';
    }
  }

  $scope.newcomment = (isValid, id) => {
    if (isValid) {

      $scope.view.posts[id].comments.push($scope.view.comment);
      $scope.view.comment = '';
    }
  }

  $scope.sorter = (flag) => {
    $scope.view.sorter = flag;
  }

}]);
