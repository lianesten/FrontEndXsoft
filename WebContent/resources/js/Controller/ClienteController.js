var appClientes = angular.module('XsoftFrontend');

//Controller para servicio buscar cliente
appClientes.controller('ClienteControl', function($scope, $http,$location,ServicioCliente) {
	
	$scope.buscar = function(){
	    //$http.get("http://localhost:8080/FrontEndXsoft/clientes.json")
	    //.success(function(response) {$scope.names = response.clientes;});

		$scope.cliente=ServicioCliente.buscarCliente(/*$scope.numeroIdCliente*/);
		console.log($scope.cliente);
	}
});



appClientes.service("ServicioCliente", function($http) {
	console.log('entro al ServiceCliente');
	this.listaClientes = function() {
		return $http({
			method : 'GET',
			url : '../rest/Clientes'
		});
	}
	this.buscarCliente = function(/*numeroIdCliente*/) {
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
		/*$http({
			method : 'GET',
			url : '../rest/Cliente/obtenerCliente',
			params : {
				idCliente : numeroIdCliente
			}
		});*/

	}
});

