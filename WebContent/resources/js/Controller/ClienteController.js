var appClientes = angular.module('XsoftFrontend');

//Controller para servicio buscar cliente
appClientes.controller('ClienteController', function($scope, $http,$location,ServicioCliente) {
	
	$scope.listaCliente ='' ;
	var usuarioCrea= "1458796";
	
	ServicioCliente.listaClientes().success(function(data){
		console.log(data);
		if(data != ''){
			if(data.tipo=="Error"){
    			return;
			}else if (data.tipo=="Info"){
    			$scope.listaCliente = data.mensaje;
    			console.log('ListaCliente=',$scope.listaCliente);
    		}
		}
	});
	
	/**
	 * 
	 */
	$scope.cerrarSession = function(){
			ServiceLogin.cerrarSesion(ServiceLogin.getToken).success(function(data){
	    		if(data != ''){
	    			if(data.tipo=="Error"){
	    				$location.url('/');
	    			}else if (data.tipo=="Logout"){	
	    				ServiceLogin.setToken('');
	    				$location.url('/');
		    				
		    		}
	    		}
	    		$location.url('/');
	    	});
		};
		
		/**
		 * 
		 */
		$scope.btnInicio = function(){
			$location.url('/PrincipalAdmin')
		}
		
		/**
		 * 
		 */
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
	
	/**
	 * 
	 */
	$scope.buscarCliente = function(){
	    //$http.get("http://localhost:8080/FrontEndXsoft/clientes.json")
	    //.success(function(response) {$scope.names = response.clientes;});
		$scope.cliente=ServicioCliente.buscarCliente(/*$scope.numeroIdCliente*/);
		console.log($scope.cliente);
	}
		

	$scope.eliminarCliente = function(){
		
		ServicioCliente.eliminarCliente(
				$scope.numeroIdClienteEliminar
		).success(
				function(data) {
					console.log(data);
					if(data!=""){//CAMBIAR LA CONDICION QUE ME RETORNE EL SERVICIO PARA VALIDARLO
						alert(data.mensaje);
						if(data.tipo=="Info"){
							$location.url('/BuscarCliente');
						}
					}else{
						alert("Por favor intenta más tarde")
					}
			});
	};
	
	$scope.crearCliente = function(){
		
		ServicioCliente.crearCliente(
				$scope.identificacionNuevoCliente,
				$scope.nombreNuevoCliente,
				$scope.apellidoNuevoCliente,
				$scope.telefonoFijoNuevoCliente,
				$scope.telefonoMovilNuevoCliente,
				$scope.emailNuevoCliente,
				$scope.direccionNuevoCliente,
				usuarioCrea
		).success(
				function(data) {
					
					if(data!=""){//CAMBIAR LA CONDICION QUE ME RETORNE EL SERVICIO PARA VALIDARLO
						alert(data.mensaje);
						if(data.tipo=="Info"){
							$location.url('/BuscarCliente');
						}
					}else{
						alert("Por favor intenta más tarde")
					}
			});
	}

});

