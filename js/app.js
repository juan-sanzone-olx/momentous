'use strict';
angular.module('app', [
	'ui.router',
	'ngMaterial',
	'app.controllers',
	'app.directives'
]);

angular.element(document).ready(function() {
  angular.bootstrap(document, ['app']);
});