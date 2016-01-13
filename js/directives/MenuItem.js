'use strict';
angular.module('app.directives', [])
.directive('menuItem', function () {
  	return {
	    restrict: 'E',
	    scope: {
	    	itemInfo: '=info'
	    },
		templateUrl: './views/menu-item.html',
        link: function(scope, element, attrs) {
            scope.getNumber = function(num) {
                return new Array(num);   
            }
        }
	};
}).directive('backImg', function(){
    return function(scope, element, attrs){
        var url = attrs.backImg;
        element.css({
            'background-image': 'url(' + url +')',
            'background-size' : 'cover'
        });
    };
});