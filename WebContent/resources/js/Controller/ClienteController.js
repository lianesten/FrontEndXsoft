var appClientes = angular.module('XsoftFrontend');

//Controller para servicio buscar cliente
appClientes.controller('BuscarClienteController', function($scope, $http,$location,ServicioCliente) {
	
	$scope.buscarCliente = function(){
	    //$http.get("http://localhost:8080/FrontEndXsoft/clientes.json")
	    //.success(function(response) {$scope.names = response.clientes;});
		$scope.cliente=ServicioCliente.buscarCliente(/*$scope.numeroIdCliente*/);
		console.log($scope.cliente);
	}
	
	
	$scope.btnInicio = function(){
		$location.url('/PrincipalAdmin')
	}
	
	$scope.btnBuscar = function(){
		$location.url('/BuscarCliente')
	}
	
	$scope.btnCrear = function() {
		$location.url('/CrearCliente');
	}
	
	$scope.btnEditar = function() {
		$location.url('/EditarCliente');
	}
	
	$scope.btnEliminar = function() {
		$location.url('/EliminarCliente');
	}
	
	/*$scope.eliminar = function(){
		ServicioCliente.eliminarCliente($scope.numeroIdClienteEliminar)
		
	}*/
});

//Controller para crear cliente
appClientes.controller('CrearClienteController', function($scope, $http,$location,ServicioCliente) {
	
	$scope.crearCliente = function(){
		//alert("Creando cliente con nombre"+$scope.nombreNuevoCliente);
		
		//$existeCliente=ServicioCliente.buscarcliente($scope.identificacionNuevoCliente);
		
		/*
		 * AQUI SE DEBE INGRESAR EL CODIGO PARA VALIDAR QUE EL CLIENTE NUEVO A INGRESAR NO EXISTA EN LA BASE DE DATOS
		 * 
		 * */
		//El servicio buscarCliente para verificar que el cliente nuevo a ingresar a la bd, se llama desde antes de invocar el servicio 
		//crearCliente o se invoca desde el mismo servicio crearClient, ¿Un servicio puede invocar a u vez otro servicio?
		ServicioCliente.crearCliente(
				$scope.identificacionNuevoCliente,
				$scope.nombreNuevoCliente,
				$scope.apellidoNuevoCliente,
				$scope.telefonoFijoNuevoCliente,
				$scope.telefonoMovilNuevoCliente,
				$scope.emailNuevoCliente,
				$scope.direccionNuevoCliente
		).success(
				function(data) {
					if(data!=""){//CAMBIAR LA CONDICION QUE ME RETORNE EL SERVICIO PARA VALIDARLO
					alert("el cliente "+$scope.nombreNuevoCliente+" con id: "+$scope.identificacionNuevoCliente+" ha sido almacenado exitosamente!")
					}else{
						alert("El cliente con id: "+$scope.identificacionNuevoCliente+" ya se encuentra registrado en el sistema!")
					}
				});
	
		
	}
	
	$scope.btnInicio = function(){
		$location.url('/PrincipalAdmin')
	}
	
	$scope.btnBuscar = function(){
		$location.url('/BuscarCliente')
	}
	
	$scope.btnCrear = function() {
		$location.url('/CrearCliente');
	}
	
	$scope.btnEditar = function() {
		$location.url('/EditarCliente');
	}
	
	$scope.btnEliminar = function() {
		$location.url('/EliminarCliente');
	}
});

//Controller para Editar cliente
appClientes.controller('EditarClienteController', function($scope, $http,$location,ServicioCliente) {
	
	
	$scope.btnInicio = function(){
		$location.url('/PrincipalAdmin')
	}
	
	$scope.btnBuscar = function(){
		$location.url('/BuscarCliente')
	}
	
	$scope.btnCrear = function() {
		$location.url('/CrearCliente');
	}
	
	$scope.btnEditar = function() {
		$location.url('/EditarCliente');
	}
	
	$scope.btnEliminar = function() {
		$location.url('/EliminarCliente');
	}
});

//Controller para elimnar cliente
appClientes.controller('EliminarClienteController', function($scope, $http,$location,ServicioCliente) {
	
	$scope.btnInicio = function(){
		$location.url('/PrincipalAdmin')
	}
	
	$scope.btnBuscar = function(){
		$location.url('/BuscarCliente')
	}
	
	$scope.btnCrear = function() {
		$location.url('/CrearCliente');
	}
	
	$scope.btnEditar = function() {
		$location.url('/EditarCliente');
	}
	
	$scope.btnEliminar = function() {
		$location.url('/EliminarCliente');
	}
});






/*========================SERVICIOS WEB==============================*/
appClientes.service("ServicioCliente", function($http) {
	console.log('entro al ServiceCliente');
	this.listaClientes = function() {
		return $http({
			method : 'GET',
			url : '../rest/Clientes'
		});
	}
	this.crearCliente = function(identificacion,nombres,apellidos,direccion,email,telFijo,telMovil,usuarioCrea){
		alert("Llamando al servicio guardar cliente...");
		console.log('entro al ServiceCliente---BuscarCliente');
		return $http({
			method : 'POST',
			url : '../rest/Cliente/guardarCliente',//Asignar laURL correcta del servicio web---------------------
			params : {
				idCliente : numeroIdClienteEliminar,
				identificacion:identificacion,
				nombres:nombres,
				apellidos:apellidos,
				direccion:direccion,
				email:email,
				telFijo:telFijo,
				telMovil:telMovil,
				usuarioCrea:usuarioCrea
			}
		});
	}

	
	this.eliminarCliente = function(numeroIdClienteEliminar){
		return $http({
			method : 'DELETE',
			url : '../rest/Cliente/eliminarCliente',
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
		/*$http({
			method : 'GET',
			url : '../rest/Cliente/obtenerCliente',//Asignar laURL correcta del servicio web---------------------
			params : {
				idCliente : numeroIdCliente
			}
		});*/

	}
});

