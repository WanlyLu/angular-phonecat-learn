angular.module('app')
	.controller('DetailController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
		$http.get('/data/' + $routeParams.id + '.json')
			.then(function(data) {
				$scope.phoneInfo = data.data
				console.log($scope.phoneInfo)
			})
	}])