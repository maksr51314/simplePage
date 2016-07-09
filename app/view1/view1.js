'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ["$scope", '$http', function($scope, $http) {
  var requestPromise;
  //TODO : define loading
  $scope.loading = true;
  $scope.repos = [];

  requestPromise = $http({
    method: 'GET',
    url: 'https://api.github.com/users/maksr51314/repos'
  });

  requestPromise.then(function successCallback(response) {
    $scope.repos = response.data;
  }, function errorCallback(response) {
    //TODO : add error handler
  });


}]);