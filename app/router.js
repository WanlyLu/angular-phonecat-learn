angular.module("app")
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl: '/app/phone-list/phone-list.html',
			controller: 'PhoneListController'
		})
			.when('/detail/:id', {
				templateUrl: '/app/phone-detail/detail.html',
				controller: 'DetailController'
			})
	}])
