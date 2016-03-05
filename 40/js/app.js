var app = angular.module('myApp', []);

app.controller('DemoController', function($scope, $filter){
  $scope.isCapitalized = function(str)
    { return str[0] == str[0].toUpperCase(); }
});
