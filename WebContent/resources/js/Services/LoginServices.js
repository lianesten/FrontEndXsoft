var appClientes = angular.module('XsoftFrontend');

//Rutas de los Servicios
var URL_SERVICIO_CERRAR_SESION = '../../XsoftBackend/rest/Sesion/logout';
var URL_SERVICIO_VALIDAR_USUARIO='../../XsoftBackend/rest/Sesion/login';

appClientes.service('ServiceLogin', function($http) {
	
	var token = '';
	/**
	 * @ngdoc method
	 * @name  setToken
	 * @description Setea el token de la sesion
	 * @param {String} token obtenido desde el servicion login
	 */
	function setToken(tok) {
		token = tok;
	}


	/**
	 * @ngdoc method
	 * @name  getToken
	 * @description Devuelve el token de la sesion
	 * @return {String} Token obtenido al iniciar sesion
	 */
	function getToken() {
	    return token;
	  }
	
	function validar(usuario, contrasena) {
		return $http({
			method : 'GET',
			url : URL_SERVICIO_VALIDAR_USUARIO,
			params : {
				username : usuario,
				password : contrasena
			}
		});
	};
	
	function cerrarSesion(token) {
		return $http({
			method : 'GET',
			url : URL_SERVICIO_CERRAR_SESION,
			params : {
				token : token
			}
		});
	};
	
	/**
	 * @ngdoc method
	 * @description Indica como responder a las peticiones que se le hagan
	 * @return {String} Token obtenido al iniciar sesion
	 */
  return {
	    getToken: getToken,
	    setToken: setToken,
	    cerrarSesion: cerrarSesion,
	    validar: validar
	    
	  };

});