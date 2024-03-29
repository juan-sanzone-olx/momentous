'use strict';
angular.module('app').config([
	'$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		var baseRoute = 'momentous/views/';
		
		$urlRouterProvider.otherwise('/menu');

		return $stateProvider.state('app', {
			url: '',
			abstract: true,
			controller: 'AppCtrl'
		}).state('menu', {
			url: '',
			templateUrl: baseRoute + 'menu.html',
			controller: 'MenuCtrl'
		});
	}
]);