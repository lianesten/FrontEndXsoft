
var appClientes = angular.module('XsoftFrontend', [ 'ngRoute', 'ngCookies']);

//Configura las vistas del aplicativo
appClientes.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		// Cuando se carga la raiz del aplicativo se carga en la vista
		templateUrl : 'pages/login.html', 
		controller : 'contLogin'
	});
	console.log('llama el archivo de configuracion');
	$routeProvider.when('/BuscarVentas',{
		templateUrl : 'pages/BuscarVentas.html',
		controller : 'contBuscarVentas'
	});
	console.log('llama el archivo de configuracion');
	$routeProvider.when('/CrearVentas',{
		templateUrl : 'pages/CrearVentas.html',
		controller : 'contCrearVentas'
	});
	console.log('llama el archivo de configuracion');
	$routeProvider.when('/EditarVentas',{
		templateUrl : 'pages/EditarVentas.html',
		controller : 'contEditarVentas'
	});
	console.log('llama el archivo de configuracion');
	$routeProvider.when('/EliminarVentas',{
		templateUrl : 'pages/EliminarVentas.html',
		controller : 'contEliminarVentas'
	});
}]);

