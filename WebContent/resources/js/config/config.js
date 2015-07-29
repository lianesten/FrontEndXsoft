
var appClientes = angular.module('XsoftFrontend', [ 'ngRoute', 'ngCookies']);

//Configura las vistas del aplicativo
appClientes.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		// Cuando se carga la raiz del aplicativo se carga en la vista
		templateUrl : 'pages/login.html', 
		controller : 'contLogin'
	});
	
	$routeProvider.when('/PrincipalAdmin', {
		templateUrl : 'pages/VistaAdmin.html', 
		controller : 'ClienteController'
	});
	
	$routeProvider.when('/BuscarCliente', {
		templateUrl : 'pages/BuscarCliente.html', 
		controller : 'ClienteController'
	});
	
	$routeProvider.when('/CrearCliente', {
		templateUrl : 'pages/CrearCliente.html', 
		controller : 'ClienteController'
	});
	
	$routeProvider.when('/EditarCliente', {
		templateUrl : 'pages/EditarCliente.html', 
		controller : 'ClienteController'
	});
	
	$routeProvider.when('/EliminarCliente', {
		templateUrl : 'pages/EliminarCliente.html', 
		controller : 'ClienteController'
	});

} ]);