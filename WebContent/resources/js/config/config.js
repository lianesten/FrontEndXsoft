
var appClientes = angular.module('XsoftFrontend', [ 'ngRoute', 'ngCookies']);

//Configura las vistas del aplicativo
appClientes.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		// Cuando se carga la raiz del aplicativo se carga en la vista
		templateUrl : 'pages/login.html', 
		controller : 'contLogin'
	});
	console.log('llama el archivo de configuracion');
} ]);