'use strict';
angular.module('app.controllers')
.controller('MenuCtrl', function ($scope) {
  $scope.menuItems = [
  	{nombre: 'Menu 1', desc: '', fechaInicio: '24-04-2016', fechaFin: '26-07-2016', precio: 280, dias: '', horaDesde: '', horaHasta:'', puntuacion: '', foto: './assets/menu1.jpg'},
  	{nombre: 'Menu 2', desc: '', fechaInicio: '09-05-2016', fechaFin: '15-08-2016', precio: 300, dias: '', horaDesde: '', horaHasta:'', puntuacion: '', foto: './assets/menu2.jpg'},
  	{nombre: 'Menu 3', desc: '', fechaInicio: '09-05-2016', fechaFin: '15-08-2016', precio: 300, dias: '', horaDesde: '', horaHasta:'', puntuacion: '', foto: './assets/menu3.jpg'},
  	{nombre: 'Menu 4', desc: '', fechaInicio: '09-05-2016', fechaFin: '15-08-2016', precio: 300, dias: '', horaDesde: '', horaHasta:'', puntuacion: '', foto: './assets/menu4.jpg'},
  	{nombre: 'Menu 5', desc: '', fechaInicio: '09-05-2016', fechaFin: '15-08-2016', precio: 300, dias: '', horaDesde: '', horaHasta:'', puntuacion: '', foto: './assets/menu5.jpg'}
  ];
});