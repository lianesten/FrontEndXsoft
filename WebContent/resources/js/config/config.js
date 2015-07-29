
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
		controller : 'contAdmin'
	});
	
	$routeProvider.when('/BuscarCliente', {
		templateUrl : 'pages/BuscarCliente.html', 
		controller : 'BuscarClienteController'
	});
	
	$routeProvider.when('/CrearCliente', {
		templateUrl : 'pages/CrearCliente.html', 
		controller : 'CrearClienteController'
	});
	
	$routeProvider.when('/EditarCliente', {
		templateUrl : 'pages/EditarCliente.html', 
		controller : 'EditarClienteController'
	});
	
	$routeProvider.when('/EliminarCliente', {
		templateUrl : 'pages/EliminarCliente.html', 
		controller : 'EliminarClienteController'
	});

} ]);