var app = angular.module('websiteModule', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/home', {
		templateUrl: 'home.html',
		controller: 'homeController'
	}).when('/projects', {
		templateUrl: 'projects.html',
		controller: 'homeController'
	}).when('/resume', {
		templateUrl: 'resume.html',
		controller: 'homeController'
	}).when('/contactMe', {
		templateUrl: 'contactMe.html',
		controller: 'homeController'
	}).otherwise({redirectTo:'/home'})
}]).controller('homeController',[function($scope) {
	console.log("main controller");
}]);


