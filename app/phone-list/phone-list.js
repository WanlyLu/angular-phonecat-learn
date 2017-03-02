angular.module('app')
	.controller('PhoneListController', ['$scope', '$http', function($scope, $http) {
		$http.get('/data/phones.json')
			.then(function(data) {
				$scope.phoneList = data.data;
			})
	}])