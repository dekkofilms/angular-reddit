app.controller('posts', ['$scope', '$http', '$window', function ($scope, $http, $window) {

  $scope.view = {};
  $scope.view.newpost = false;
  $scope.view.comments = false;
  $scope.view.addcomment = false;
  $scope.view.idCount = 2;
  $scope.view.comment = null;

  $scope.view.sorter = '-count';

  $http.get('/posts').then(function (response) {
    console.log(response);
    $scope.view.posts = response.data
  })

  $scope.vote = (id, flag) => {
    if (flag === "up") {
      $scope.view.posts[id].count++;
    }

    if (flag === "down") {
      $scope.view.posts[id].count--;
    }
  }

  $scope.submit = function (isValid) {
    if (isValid) {
      $scope.view.newpost = !$scope.view.newpost;

      //defining the new post submission
      let newPost = {};
      newPost.title = $scope.title;
      newPost.content = $scope.description;
      newPost.image_link = $scope.imageLink;
      // newPost.author = $scope.author;

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

  console.log($window.localStorage.token);

  $scope.isUser = false;
  if ($window.localStorage.token) {
    $scope.isUser = true;
  }
  console.log($scope.isUser);

  $scope.logout = function () {
    console.log('hit logout');
    $window.localStorage.setItem('token', "");
    $scope.isUser = false;
  }

}]);

app.controller('signup', ['$scope', '$http', '$window', '$state', function ($scope, $http, $window, $state) {
  $scope.user = {}

  $scope.newUser = function () {
    $http.post('/auth/signup', $scope.user).then(function (response) {
      console.log(response.data.token);
      $window.localStorage.setItem('token', response.data.token);
      $state.go('index');
    })
  }

  $scope.login = function () {
    $http.post('/auth/login', $scope.user).then(function (response) {
      console.log(response.data.token);
      $window.localStorage.setItem('token', response.data.token);
      $state.go('index');
    })
  }
}]);
