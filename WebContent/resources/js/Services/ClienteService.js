
var appClientes = angular.module('XsoftFrontend');

var URL_SERVICIO_LISTAR_cLIENTES='../../XsoftBackend/rest/Cliente';
var URL_SERVICIO_CREAR_CLIENTE='../../XsoftBackend/rest/Cliente/guardarCliente';
var URL_SERVICIO_ELIMINAR_CLIENTE = '../../XsoftBackend/rest/Cliente/eliminarCliente'


appClientes.service("ServicioCliente", function($http) {
	console.log('entro al ServiceCliente');
	
	this.listaClientes = function() {
		return $http({
			method : 'GET',
			url : URL_SERVICIO_LISTAR_cLIENTES
		});
	}
	
	
	this.crearCliente = function(identificacion,nombres,apellidos,telFijo,telMovil,email,direccion,usuario){
		console.log('entro al ServiceCliente---BuscarCliente');
		return $http({
			method : 'POST',
			url : URL_SERVICIO_CREAR_CLIENTE,//Asignar laURL correcta del servicio web---------------------
			params : {
				identificacion:identificacion,
				nombres:nombres,
				apellidos:apellidos,
				direccion:direccion,
				email:email,
				telFijo:telFijo,
				telMovil:telMovil,
				usuarioCrea:usuario
			}
		});
	}

	
	this.eliminarCliente = function(numeroIdClienteEliminar){
		return $http({
			method : 'DELETE',
			url : URL_SERVICIO_ELIMINAR_CLIENTE,
			params : {
				idCliente : numeroIdClienteEliminar
			}
		});
	}
	
	this.buscarCliente = function(numeroIdCliente) {
		console.log('entro al ServiceCliente---BuscarCliente');
		return {
			  "numeroId": "496",
			  "nombres": "Julian ",
			  "apellidos": "Marin",
			  "telefonoFijo": "42566",
			  "telefonoMovil": "3142563214",
			  "email": "pandres@gmail.com",
			  "direccion": "Norte de Medellin"
			}

	}
	
});	