'use strict';
angular.module('app.controllers')
.controller('MenuCtrl', function ($scope) {
	$scope.days = ['Lun','Mar','Mie','Jue','Vie','Sab','Dom'];
	$scope.search = {
		day: null,
		price: '',
		date: null,
		hour: ''
	};

	$scope.menuItems = [
		{id: 1, menuName: 'Menu 1', desc: 'Bife de chorizo con guarnicion, bebida y postre.', dateStart: '04/24/2016', dateEnd: '07/26/2016', price: 280, days: ['Vie','Sab','Dom'], hourStart: '19:30', hourEnd:'23:30', score: 5, picture: './assets/menu1.jpg'},
		{id: 2, menuName: 'Menu 2', desc: 'Ensalada completa, bebida y postre.', dateStart: '05/09/2016', dateEnd: '08/15/2016', price: 150, days: ['Lun','Mar','Mie'], hourStart: '12:30', hourEnd:'15:30', score: 4, picture: './assets/menu2.jpg'},
		{id: 3, menuName: 'Menu 3', desc: 'Sushi de 8 piezas, bebida y postre', dateStart: '05/09/2016', dateEnd: '08/15/2016', price: 350, days: ['Lun','Mar','Mie'], hourStart: '12:30', hourEnd:'15:30', score: 3, picture: './assets/menu3.jpg'},
		{id: 4, menuName: 'Menu 4', desc: 'Hamburguesa completa, bebida y postre', dateStart: '05/09/2016', dateEnd: '08/15/2016', price: 180, days: ['Lun','Mar','Mie'], hourStart: '12:30', hourEnd:'15:30', score: 4, picture: './assets/menu4.jpg'},
		{id: 5, menuName: 'Menu 5', desc: 'Ravioles a la pomarola, bebida y postre', dateStart: '05/09/2016', dateEnd: '08/15/2016', price: 210, days: ['Lun','Mar','Mie'], hourStart: '12:30', hourEnd:'15:30', score: 1, picture: './assets/menu5.jpg'}
	];

	$scope.dateFilter = function (menuItem) {
		if ($scope.search.date == null)
    		return true;

    	return (new Date(menuItem.dateEnd) >= new Date($scope.search.date) && new Date($scope.search.date) >= new Date(menuItem.dateStart));
    };
    
    $scope.hourFilter = function (menuItem) {
    	if ($scope.search.hour == '')
    		return true;
    	
    	return (Date.parse('01/01/2011 ' + menuItem.hourEnd) >= Date.parse('01/01/2011 ' + $scope.search.hour) && Date.parse('01/01/2011 ' + $scope.search.hour) >= Date.parse('01/01/2011 ' + menuItem.hourStart));
	};

	$scope.priceFilter = function (menuItem) {
    	if ($scope.search.price == '')
    		return true;
    	
    	return (menuItem.price == $scope.search.price);
	};

	$scope.daysFilter = function (menuItem) {
		var result = false;

    	if ($scope.search.day == null)
    		return true;

		angular.forEach(menuItem.days, function(day, key) {
			if ($scope.search.day == day)
		  		result = true;
		});

		return result;
	};
});