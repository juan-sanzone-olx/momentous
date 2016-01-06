'use strict';
angular.module('app', [
	'ui.router',
	'app.controllers',
	'app.directives'
]);

angular.element(document).ready(function() {
  angular.bootstrap(document, ['app']);
});