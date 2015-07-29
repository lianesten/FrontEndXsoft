var appClientes = angular.module('XsoftFrontend');

//Rutas de los Servicios
var URL_SERVICIO_VALIDAR_USUARIO = '../../XsoftBackend/rest/Sesion/login';


appClientes.service('ServiceLogin', function($http) {
	// Llama el servicio web para validar el usuario y la contraseña
	this.validar = function(usuario, contrasena) {
		return $http({
			method : 'GET',
			url : URL_SERVICIO_VALIDAR_USUARIO,
			params : {
				username : usuario,
				password : contrasena
			}
		});
	};

});