var app = angular.module('reddit', ['ngAnimate', 'ngMessages', 'ui.router']);

app.config(function ($stateProvider) {
  $stateProvider
    .state('index', {
      url: '/',
      templateUrl: '../public/partials/posts.html',
      controller: 'posts'
    })
});
