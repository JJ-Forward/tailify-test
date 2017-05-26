var app = angular.module('myApp', []);
app.controller('kittieCtrl', function($scope, $http) {

  $http.get("https://devtest.tailify.com/api/list/").then(function (response) {
      $scope.myData = response.data;
  });

  $scope.sendData = function(sendData) {
    $http.post("https://devtest.tailify.com/api/upload/").then(function(response){
  		$scope.sendData = response.data;
  	});
	$window.alert(sendData);
  };

});