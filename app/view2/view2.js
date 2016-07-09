'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2:repoName', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', '$http', '$routeParams','$location', function($scope, $http, $routeParams,$location) {
  var requestPromise;

  $scope.repo = {};

  //TODO : find the reason why routeParams create param with ":"
  var repoName = $routeParams.repoName.split(":")[1];

  requestPromise = $http({
    method: 'GET',
    url: 'https://api.github.com/repos/maksr51314/' + repoName
  });

  requestPromise.then(function successCallback(response) {
    $scope.repo = response.data;
  }, function errorCallback(response) {
    //TODO : add error handler
  });

  $scope.onBack = function () {
    $location.path('/view1');
  }

}]);