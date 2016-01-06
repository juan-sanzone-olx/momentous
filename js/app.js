'use strict';
angular.module('app', [
	'ui.router',
	'app.controllers'
]);

angular.element(document).ready(function() {
  angular.bootstrap(document, ['app']);
});