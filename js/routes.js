'use strict';
angular.module('app').config([
	'$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		var baseRoute = '/views/';
		
		$urlRouterProvider.otherwise('/menu');

		return $stateProvider.state('app', {
			url: '',
			abstract: true,
			controller: 'AppCtrl'
		}).state('menu', {
			url: '',
			templateUrl: baseRoute + 'menu.html',
			controller: 'AppCtrl'
		});
	}
]);